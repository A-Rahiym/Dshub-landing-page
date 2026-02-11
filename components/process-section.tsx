"use client";

import { useRef } from "react";
import { ImageBadge } from "./image-badge";

export function ProcessSection() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  const steps = [
    {
      title: "Application",
      description:
        "Submit your application, select your role, and tell us about your goals and interest in tech.",
    },
    {
      title: "Onboarding & Orientation",
      description:
        "Attend orientation sessions where you learn how teams operate, how communication works, and how to use collaboration tools.",
    },
    {
      title: "Work on real project tasks every week",
      description:
        "Work on real project tasks every week, attend stand-up meetings, submit deliverables, and receive structured feedback from mentors.",
    },
  ];

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-3 sm:mb-4">
            <span className="text-primary-light-blue">How DSHub </span>{" "}
            Internship Works
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed max-w-2xl">
            A structured experience designed to simulate real team collaboration
            and prepare you for real industry work.
          </p>
        </div>

        {/* Timeline Layout */}
        <div ref={containerRef}>
          {/* Timeline - Left Side */}
          <div className="relative">
            {/* Vertical line connector */}
            <div className="hidden md:block absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-light-blue to-blue-300 z-0"></div>

            {/* Steps */}
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 sm:gap-6 md:gap-8">
                  {/* Circle number - Desktop */}
                  <div className="hidden md:flex flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-light-blue to-blue-400 flex items-center justify-center text-white font-bold text-xl border-4 border-white shadow-lg ring-4 ring-primary-light-blue/20 hover:shadow-xl transition-shadow">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2 md:pt-0">
                    {/* Circle number - Mobile */}
                    <div className="md:hidden mb-3 w-12 h-12 rounded-full bg-gradient-to-br from-primary-light-blue to-blue-400 flex items-center justify-center text-white font-bold text-lg border-3 border-white shadow-md">
                      {index + 1}
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 sm:p-5 md:p-6 hover:shadow-md transition-shadow hover:-translate-y-1 cursor-default">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-text-dark mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-text-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image - Right Side (kept commented) */}
          {/*
          <div className="relative hidden lg:block">
            <div className="sticky top-24">
              <img 
                src="/process-image.jpg" 
                alt="Process illustration"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}
