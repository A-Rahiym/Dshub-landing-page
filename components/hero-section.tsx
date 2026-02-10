"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-light-blue to-blue-300 overflow-hidden hexagon-pattern mb-8"
    >
      {/* Layout Pattern Overlay */}
      {/* <div className="absolute inset-0 layout-pattern-10" /> */}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        {/* <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="hexagon" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30,0 L60,17.32 L60,51.96 L30,69.28 L0,51.96 L0,17.32 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1200" height="800" fill="url(#hexagon)" />
        </svg> */}
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-dark-blue leading-tight animate-float-up">
              Start Your Tech Career
              <br />
              <span className="text-white">
                With Real Internship Experience
              </span>
            </h1>

            <p
              className="text-lg text-white leading-relaxed animate-float-up"
              style={{ animationDelay: "100ms" }}
            >
              Join DSHub Internship — a structured program where you work on
              real projects, collaborate with a team, receive guidance from
              mentors, and graduate with a strong portfolio and industry
              recommendation.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 pt-2 animate-float-up"
              style={{ animationDelay: "200ms" }}
            >
              <Link
                href="https://forms.gle/jHzPbmqL5gwRhHmj9"
                target="_blank"
                className="bg-accent-yellow text-text-dark hover:bg-yellow-500 font-semibold px-8 py-3 rounded-lg disabled:opacity-50"
              >
                Apply for Internship
              </Link>
              <Button
                variant="outline"
                className="border-2 border-text-dark text-text-dark hover:bg-white font-semibold px-8 py-6 rounded-lg bg-transparent"
              >
                View Internship Roles
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative h-96 sm:h-full min-h-96 animate-float-up"
            style={{ animationDelay: "300ms" }}
          >
            
            {/* <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=450&fit=crop"
              alt="Internship Experience"
              className="w-full h-full object-cover rounded-2xl"
            /> */}
            
            <Image
            src={'/hero_pic.jpg'}
            alt="hero section"
            width={600}
            height={450}
            className="w-[600] h-[450] object-cover rounded-2xl"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
}