"use client";

import { Button } from "./ui/button";
import { useState } from "react";
import { submitApplication } from "@/lib/services/application";
import Link from "next/link";

export function CTABanner() {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleApplyClick = async () => {
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const result = await submitApplication({
      fullName: "Sample User",
      email: "user@example.com",
      role: "Frontend Development",
    });

    if (result.success) {
      setSuccessMessage("Application submitted successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } else {
      setErrorMessage(result.error || "Failed to submit application");
    }
    setIsLoading(false);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <div
          className=" rounded-3xl p-12 md:p-16 relative overflow-hidden"
          style={{
            backgroundImage: "url(/header-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0  bg-gradient-to-br from-primary-light-blue to-blue-300 rounded-3xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="hidden md:block relative h-72 animate-float-up">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=350&fit=crop"
                alt="Ready to Begin"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Content */}
            <div
              className="space-y-6 text-white text-center md:text-left animate-float-up"
              style={{ animationDelay: "100ms" }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Ready to Begin?
                <br />
                Apply and Start Building
              </h2>

              <p className="text-lg text-blue-100 leading-relaxed mb-3">
                Start your journey with a community that supports you.
                Instructors who guide you, and a structure designed
              </p>

              <Link
                href="https://forms.gle/jHzPbmqL5gwRhHmj9"
                target="_blank"
                className="mt-1 bg-accent-yellow text-text-dark hover:bg-yellow-500 font-semibold px-8 py-3 rounded-lg disabled:opacity-50"
              >
                <span>Apply for Internship</span>
              </Link>

              {successMessage && (
                <p className="text-green-300 text-sm font-medium">
                  {successMessage}
                </p>
              )}

              {errorMessage && (
                <p className="text-red-300 text-sm font-medium">
                  {errorMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
