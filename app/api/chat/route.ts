import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Simple in-memory rate limiter
class InMemoryRateLimiter {
  private requests: Map<string, { count: number; resetTime: number }> = new Map();
  private readonly requestLimit: number;
  private readonly windowMs: number;

  constructor(requestLimit: number, windowMs: number) {
    this.requestLimit = requestLimit;
    this.windowMs = windowMs;
    
    // Clean up old entries every minute
    setInterval(() => this.cleanup(), 60000);
  }

  async limit(key: string): Promise<{ 
    success: boolean; 
    limit: number; 
    remaining: number; 
    reset: number;
  }> {
    const now = Date.now();
    const record = this.requests.get(key) || { count: 0, resetTime: now + this.windowMs };
    
    // Reset counter if the time window has passed
    if (now > record.resetTime) {
      record.count = 0;
      record.resetTime = now + this.windowMs;
    }
    
    record.count += 1;
    this.requests.set(key, record);
    
    const remaining = Math.max(0, this.requestLimit - record.count);
    const success = record.count <= this.requestLimit;
    
    return {
      success,
      limit: this.requestLimit,
      remaining,
      reset: record.resetTime,
    };
  }

  private cleanup() {
    const now = Date.now();
    // Use Array.from to avoid iterator issues
    const entries = Array.from(this.requests.entries());
    for (const [key, record] of entries) {
      if (now > record.resetTime) {
        this.requests.delete(key);
      }
    }
  }
}

// Create rate limiter instance: 5 requests per minute
const rateLimiter = new InMemoryRateLimiter(5, 60 * 1000);

export async function POST(request: NextRequest) {
  try {
    // Get user IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'anonymous';
    
    // Apply rate limiting
    const { success, limit, reset, remaining } = await rateLimiter.limit(ip);
    
    if (!success) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429, headers: { 
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': remaining.toString(),
          'X-RateLimit-Reset': reset.toString()
        }}
      );
    }

    // Parse request body
    const { messages, siteContext } = await request.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Invalid request. Messages array is required.' },
        { status: 400 }
      );
    }

    // Create a system message that defines the assistant's behavior
    const systemMessage = {
      role: "system",
      content: `You are a helpful assistant for EchoSync, a review generation platform that helps businesses collect customer reviews automatically.

Use the following context about EchoSync to inform your responses, but don't limit yourself to only this information. The context should help you understand what EchoSync does, but you can be conversational and helpful beyond this specific information:

${siteContext}

If you're asked about something not covered in the context, you can still provide a helpful response based on general knowledge about review management, local SEO, and small business marketing. 

IMPORTANT: Keep your responses extremely concise - no more than 50 words. Be friendly and focused on how EchoSync helps businesses generate and manage reviews.

Do not make up specific features, pricing, or capabilities that aren't mentioned in the context.`
    };

    // Add system message to the beginning of the messages array
    const fullMessages = [systemMessage, ...messages];

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: fullMessages,
      temperature: 0.7,
      max_tokens: 200,
    });

    // Return the response
    return NextResponse.json({
      message: response.choices[0].message,
    });
  } catch (error: any) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred during the request.' },
      { status: 500 }
    );
  }
} 