"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ImageBadge } from "./image-badge";

export function ProcessSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const { scrollY } = useScroll();
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

  // Line animation based on scroll
  const lineHeight = useTransform(scrollY, [0, 500], ["0%", "100%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-3 sm:mb-4">
            <span className="text-primary-light-blue">How DSHub </span>{" "}
            Internship Works
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed max-w-2xl">
            A structured experience designed to simulate real team collaboration
            and prepare you for real industry work.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Timeline - Left Side */}
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Vertical line connector - Background */}
            <div className="hidden md:block absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-light-blue to-blue-300 z-0"></div>

            {/* Animated line progress */}
            <motion.div
              className="hidden md:block absolute left-6 top-0 w-1 bg-gradient-to-b from-primary-light-blue via-blue-400 to-blue-300 z-[1] origin-top"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            ></motion.div>

            {/* Steps */}
            <motion.div className="space-y-6 sm:space-y-8 md:space-y-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 sm:gap-6 md:gap-8"
                  variants={itemVariants}
                >
                  {/* Circle number - Desktop */}
                  <motion.div
                    className="hidden md:flex flex-shrink-0 relative z-10"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-light-blue to-blue-400 flex items-center justify-center text-white font-bold text-xl border-4 border-white shadow-lg ring-4 ring-primary-light-blue/20 hover:shadow-xl transition-shadow">
                      {index + 1}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 pt-2 md:pt-0">
                    {/* Circle number - Mobile */}
                    <motion.div
                      className="md:hidden mb-3 w-12 h-12 rounded-full bg-gradient-to-br from-primary-light-blue to-blue-400 flex items-center justify-center text-white font-bold text-lg border-3 border-white shadow-md"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={
                        isInView
                          ? { scale: 1, rotate: 0 }
                          : { scale: 0, rotate: -180 }
                      }
                      transition={{
                        delay: index * 0.15,
                        type: "spring",
                        stiffness: 100,
                      }}
                    >
                      {index + 1}
                    </motion.div>

                    <motion.div
                      className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 sm:p-5 md:p-6 hover:shadow-md transition-shadow hover:-translate-y-1 cursor-default"
                      whileHover={{
                        y: -4,
                        boxShadow: "0 10px 30px rgba(99, 180, 245, 0.2)",
                      }}
                    >
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-text-dark mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-text-muted leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div
            className="relative h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-96"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.img
              src="/african-girl.jpg"
              alt="DSHub Internship Process"
              className="w-full h-full object-cover rounded-lg md:rounded-2xl shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            {/* Overlay accent */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-primary-light-blue/10 to-transparent rounded-lg md:rounded-2xl"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            ></motion.div>

            {/* Badge */}
            <ImageBadge
              title="Step-by-Step"
              subtitle="Guided Process"
              className="absolute -bottom-6 left-6"
              delay={0}
              bgColor="#3B82F6" // light blue badge
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
