"use client";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex items-start gap-4 p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
      {/* Icon */}
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-light-blue flex items-center justify-center text-white shadow-md">
        {icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
