"use client";
import { Award, Users, Briefcase, TrendingUp, Globe, Zap } from "lucide-react";
import Image from "next/image";
import { BenefitCard } from "./benefit-card";
import { ImageBadge } from "./image-badge";

interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function WhyJoinSection() {
  const benefits: BenefitItem[] = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Real Projects",
      description:
        "Work on actual projects that impact real users and businesses",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mentor Guidance",
      description: "Learn directly from experienced industry professionals",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Strong Portfolio",
      description:
        "Build a portfolio with professional work to showcase to employers",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Skill Development",
      description: "Master in-demand technical and soft skills",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Network Building",
      description: "Connect with peers and professionals in the tech industry",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Career Acceleration",
      description: "Get industry recommendations and job opportunities",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {/* Subtle background shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-10" />

              <Image
                src="/why-join.jpg"
                alt="DSHub Community"
                fill
                className="object-cover"
              />

              {/* Badge slightly outside the image */}
              <ImageBadge
                title="Community"
                subtitle="Grow with purpose"
                className="absolute top-6 left-6"
                delay={0}
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Why Join{" "}
                <span className="text-primary-light-blue">
                  DSHub Internship?
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                We're not just an internship program. We're a launchpad for your
                tech career with structured learning, real-world experience, and
                a supportive community.
              </p>
            </div>

            {/* Benefits Grid - Original Card Design */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
