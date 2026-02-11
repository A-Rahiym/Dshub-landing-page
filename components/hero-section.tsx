"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { ImageBadge } from "./image-badge";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-primary-light-blue overflow-hidden  mb-8"
    >
      {/* Tech Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* ===== Subtle Animated Ambient Light ===== */}
      <div className="hero-ambient z-0" />

      {/* Layout Pattern Overlay (reduced so animation can show) */}
      <div
        className="absolute inset-0 opacity-25 z-0"
        style={{
          backgroundImage: "url(/layout-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.05,
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark-blue leading-tight animate-float-up">
              Start Your Tech Career
              <br />
              <span className="text-white">
                With Real Internship Experience
              </span>
            </h1>

            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed animate-float-up"
              style={{ animationDelay: "100ms" }}
            >
              Join DSHub Internship — a structured program where you work on
              real projects, collaborate with a team, receive guidance from
              mentors, and graduate with a strong portfolio and industry
              recommendation.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-3 sm:pt-4 animate-float-up w-full sm:w-auto"
              style={{ animationDelay: "200ms" }}
            >
              {/* Primary CTA */}
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-accent-yellow text-text-dark hover:bg-yellow-500 font-semibold rounded-lg transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] shadow-lg hover:shadow-xl"
              >
                <Link
                  href="https://forms.gle/jHzPbmqL5gwRhHmj9"
                  target="_blank"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-accent-yellow text-text-dark hover:bg-yellow-500 font-semibold px-6 sm:px-8 h-11 sm:h-12 rounded-lg text-center text-sm sm:text-base whitespace-nowrap transition-colors"
                >
                  Apply for Internship
                </Link>
              </Button>

              {/* Secondary CTA */}
              <Button
                onClick={() => {
                  document
                    .getElementById("internship")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                variant="outline"
                className="w-full sm:w-auto h-11 sm:h-12 border-2 border-text-dark text-text-dark hover:bg-white font-semibold px-6 sm:px-8 rounded-lg bg-transparent text-sm sm:text-base whitespace-nowrap"
              >
                View Internship Roles
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-96 animate-float-up"
            style={{ animationDelay: "300ms" }}
          >
            <Image
              src="/hero.jpg"
              alt="Students working together during internship"
              width={600}
              height={450}
              quality={75}
              className="w-full h-full object-cover rounded-lg sm:rounded-2xl"
              priority
            />
            <ImageBadge
              title="Team Work"
              subtitle="Collaborative Development"
              className="bottom-3 left-3 sm:bottom-5 sm:left-5"
              delay={0}
            />

            <ImageBadge
              title="Mentorship"
              subtitle="Guided by Professionals"
              className="top-3 right-3 sm:top-6 sm:right-6"
              delay={200}
            />

            <ImageBadge
              title="Real Projects"
              subtitle="Industry-Style Workflow"
              className="bottom-20 right-6 sm:bottom-24 sm:right-10"
              delay={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}