"use client";

import { Button } from "./ui/button";
import { useState } from "react";
import { ImageBadge } from "./image-badge";

export function CTABanner() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8  bg-white relative overflow-hidden">
      <div className="relative max-w-7xl bg-primary-dark-blue mx-auto rounded-xl pb-12 px-6 sm:px-12 md:px-16 lg:px-20">
        <div
          className=" rounded-3xl p-12 md:p-16 relative overflow-hidden"
          style={{
            backgroundImage: "url(/header-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0  bg-gradient-to-br  rounded-3xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="hidden md:block relative h-72 animate-float-up">
              {/* Subtle background shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-yellow to-transparent opacity-20 rounded-3xl blur-2xl" />

              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/cta.jpg"
                  alt="Ready to Begin"
                  className="w-full h-full object-cover"
                />

                {/* Badge */}
                <ImageBadge
                  title="Opportunity"
                  subtitle="Your Next Step"
                  className="top-3 left-3"
                  delay={0}
                  bgColor="#3B82F6" // light blue
                />
              </div>

              {/* Caption */}
              <div className="mt-3 sm:mt-4 text-center">
                <p className="text-xs sm:text-sm text-white font-semibold tracking-wide">
                  YOUR NEXT OPPORTUNITY AWAITS
                </p>
              </div>
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

              <Button
                asChild
                className="mt-6 bg-accent-yellow text-text-dark hover:bg-yellow-500 font-semibold px-8 py-3 rounded-lg text-base sm:text-lg"
              >
                <a
                  href="https://forms.gle/jHzPbmqL5gwRhHmj9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply for Internship
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
