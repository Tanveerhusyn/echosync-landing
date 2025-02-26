"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, X, ChevronRight } from "lucide-react";
import { toast } from "react-hot-toast";

// Define message type
type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

// Popular questions based on context data
const popularQuestions = [
  "How do more reviews help SMBs?",
  "How many reviews can I get with EchoSync?",
  "Is EchoSync Google compliant?"
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [showPopularQuestions, setShowPopularQuestions] = useState(true);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Show chatbot icon after 20 seconds
  useEffect(() => {
    console.log("Setting up chatbot auto-popup timer");
    const timer = setTimeout(() => {
      console.log("Timer triggered after 20 seconds");
      const hasSeenChatbot = localStorage.getItem("hasSeenChatbot");
      console.log("hasSeenChatbot value:", hasSeenChatbot);
      
      // Force open for testing - remove this line later
      localStorage.removeItem("hasSeenChatbot");
      
      if (!hasSeenChatbot) {
        console.log("Opening chatbot automatically");
        setIsOpen(true);
        localStorage.setItem("hasSeenChatbot", "true");
      }
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  // Add initial welcome message when chat is opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content: "👋 Hi there! I'm your EchoSync assistant. Ask me anything about the product and getting more reviews!"
        }
      ]);
    }
  }, [isOpen, messages.length]);

  // Focus input when chat is opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Handle sending a message
  const handleSendMessage = async (questionText = input.trim()) => {
    if (!questionText) return;

    const userMessage: Message = { role: "user", content: questionText };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setShowPopularQuestions(false);

    try {
      // Actual site context from the website
      const siteContext = `
        EchoSync is a review management platform for small businesses that helps collect customer reviews on autopilot.
        
        Main features of EchoSync:
        1. Frictionless Review Collection
           - Zapier integration with thousands of CRMs
           - "Set and forget" automation
           - Free setup call
        
        2. AI-Powered Review Responses
           - Instant AI responses to reviews
           - Trained on your brand voice
           - Professional handling of negative feedback
           - 35% more revenue for businesses that respond to reviews
        
        3. Local SEO Improvement
           - Helps businesses rank higher on Google Maps
           - Dominate local search results
           - 2x revenue with 200+ reviews
        
        4. 100% Compliant With Google's Terms of Service
           - No review gating
           - Fully compliant with Google policies
           - Transparent collection process
           - FTC guidelines compliant
        
        Pricing Plans:
        1. Starter Plan - $29/mo or $17/mo billed annually ($204/year, saves $144)
           - 100 review requests/month (~4 per day)
           - 10 AI responses
           - Zapier automation
           - 24/7 email support
           - Free setup call
        
        2. SMB Plan - $79/mo or $47/mo billed annually ($564/year, saves $384)
           - 750 review requests/month (~25 per day)
           - Unlimited AI responses
           - Everything in Starter plan
        
        3. Enterprise Plan - $199/mo or $119/mo billed annually ($1,428/year, saves $960)
           - 3000 review requests/month
           - Everything in SMB Plan
           - Priority support
        
        EchoSync's tagline: "Grow Your Reviews By 500%" and "Never worry about asking for reviews again."
        
        EchoSync helps small businesses collect more customer reviews automatically, which improves their online presence and local search rankings.
      `;

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          siteContext,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get response");
      }

      setMessages((prev) => [...prev, data.message]);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to get a response. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle popular question click
  const handlePopularQuestionClick = (question: string) => {
    handleSendMessage(question);
  };

  // Handle input submission
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Auto-resize textarea
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target;
    // Limit input to 150 characters
    if (target.value.length <= 150) {
      setInput(target.value);
      target.style.height = "auto";
      target.style.height = `${Math.min(target.scrollHeight, 120)}px`;
    }
  };

  return (
    <>
      {/* Chat Icon Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
            onClick={() => setIsOpen(true)}
            aria-label="Open chat"
          >
            <MessageSquare size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 flex h-[500px] w-[380px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-blacksection"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h3 className="font-semibold">EchoSync Assistant</h3>
                  <p className="text-xs opacity-80">Review generation expert</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 transition-colors hover:bg-white/20"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-5 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              {messages.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center text-gray-500 dark:text-gray-400">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                    <MessageSquare size={28} className="text-blue-500" />
                  </div>
                  <h4 className="mb-2 text-lg font-medium">Ask about EchoSync Reviews!</h4>
                  <p className="text-sm">
                    I can help answer questions about how EchoSync helps small businesses collect and generate customer reviews.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {message.role !== "user" && (
                        <div className="mr-2 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                          <MessageSquare size={14} className="text-white" />
                        </div>
                      )}
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                          message.role === "user"
                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                            : "bg-gray-100 dark:bg-btndark dark:text-white"
                        }`}
                      >
                        <p className="whitespace-pre-wrap text-sm leading-relaxed">
                          {message.content}
                        </p>
                      </div>
                      {message.role === "user" && (
                        <div className="ml-2 h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700" />
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="mr-2 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                        <MessageSquare size={14} className="text-white" />
                      </div>
                      <div className="max-w-[85%] rounded-2xl bg-gray-100 px-4 py-3 dark:bg-btndark dark:text-white">
                        <div className="flex space-x-2">
                          <div className="h-2 w-2 animate-pulse rounded-full bg-gray-400"></div>
                          <div className="h-2 w-2 animate-pulse rounded-full bg-gray-400" style={{ animationDelay: "0.2s" }}></div>
                          <div className="h-2 w-2 animate-pulse rounded-full bg-gray-400" style={{ animationDelay: "0.4s" }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Popular Questions */}
            {messages.length > 0 && showPopularQuestions && (
              <div className="px-5 py-3 border-t border-gray-200 dark:border-gray-800">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {popularQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handlePopularQuestionClick(question)}
                      className="text-sm px-3 py-1.5 rounded-full bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 text-blue-600 dark:text-blue-300 transition-colors flex items-center"
                    >
                      <span>{question}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Chat Input */}
            <div className="border-t border-gray-200 p-4 dark:border-gray-800">
              <div className="flex items-end gap-2">
                <div className="relative flex-1">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="w-full resize-none rounded-xl border border-gray-300 bg-transparent p-3 pb-6 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:text-white"
                    rows={1}
                    style={{ maxHeight: "120px" }}
                    disabled={isLoading}
                    maxLength={150}
                  />
                  <div className="absolute bottom-2 right-3 text-xs text-gray-400">
                    {input.length}/150
                  </div>
                </div>
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!input.trim() || isLoading}
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${
                    input.trim() && !isLoading
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md hover:shadow-lg"
                      : "bg-gray-200 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                  }`}
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot; 