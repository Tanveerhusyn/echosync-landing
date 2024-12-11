import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs Page - Solid SaaS Boilerplate",
  description: "This is Docs page for Solid Pro",
  // other metadata
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div
              style={{
                background: "#4479F4",
              }}
              className="w-full bg-black px-4 lg:w-3/4"
            >
              <div
                style={{
                  background: "#4479F4",
                }}
                className="blog-details blog-details-docs dark:bg-gray-dark rounded-lg bg-white px-8 py-11 shadow-lg sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              >
                <h1 className="mb-8 text-3xl font-bold text-black dark:text-white">
                  Welcome to Startup Documentation
                </h1>

                <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                  EchoSync Flow Setup Guide
                </h2>

                <div className="space-y-8">
                  <section>
                    <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                      1. Setting up Zap
                    </h3>

                    <div className="mb-6 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                      <h4 className="mb-3 text-lg font-medium text-black dark:text-white">
                        Prerequisites
                      </h4>
                      <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Access to your CRM system</li>
                        <li>EchoSync account</li>
                        <li>Zapier account</li>
                      </ul>
                    </div>

                    <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                      <h4 className="mb-3 text-lg font-medium text-black dark:text-white">
                        Configuration Steps
                      </h4>
                      <ol className="list-decimal space-y-4 pl-5 text-gray-700 dark:text-gray-300">
                        <li>
                          Connect CRM and select "New Contact" or similar
                          trigger event
                        </li>
                        <li>
                          Configure second step:
                          <ul className="mt-2 list-disc space-y-2 pl-5">
                            <li>Connect EchoSync account</li>
                            <li>Select "Create Contact in EchoSync"</li>
                            <li>Publish Zap</li>
                          </ul>
                        </li>
                      </ol>
                    </div>
                  </section>

                  <section>
                    <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                      2. Sending Review Request through EchoSync
                    </h3>

                    <div className="space-y-6">
                      <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                        <h4 className="mb-3 text-lg font-medium text-black dark:text-white">
                          Contact Synchronization
                        </h4>
                        <p className="mb-3 text-gray-700 dark:text-gray-300">
                          After Zap is published and a new contact is created in
                          your CRM (e.g., HubSpot), the contact will appear in
                          EchoSync's platform under:
                        </p>
                        <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
                          <li>
                            Contacts → New Contacts → Request Reviews section
                          </li>
                        </ul>
                      </div>

                      <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                        <h4 className="mb-3 text-lg font-medium text-black dark:text-white">
                          Campaign Creation and Execution
                        </h4>
                        <ol className="list-decimal space-y-4 pl-5 text-gray-700 dark:text-gray-300">
                          <li>
                            Create Campaign:
                            <ul className="mt-2 list-disc space-y-2 pl-5">
                              <li>Navigate to Settings</li>
                              <li>Click "Create Campaign"</li>
                              <li>
                                Configure campaign settings according to your
                                needs
                              </li>
                            </ul>
                          </li>
                          <li>
                            Send Campaign:
                            <ul className="mt-2 list-disc space-y-2 pl-5">
                              <li>Go to Contacts → New Contacts</li>
                              <li>Select the target contact</li>
                              <li>
                                Click the three dots under "Actions" column
                              </li>
                              <li>Select "Send Campaign"</li>
                              <li>Choose your campaign</li>
                              <li>Click "Send to users"</li>
                            </ul>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
