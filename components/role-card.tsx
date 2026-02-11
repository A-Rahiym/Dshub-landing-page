'use client'

import { ReactNode, useState } from 'react'
import { Type as type, LucideIcon } from 'lucide-react'

interface ToolIcon {
  icon: LucideIcon
  name: string
}

type ColorVariant = 'blue' | 'purple' | 'orange' | 'yellow' | 'red' | 'pink' | 'green' | 'indigo' | 'teal'

const iconColorMap: Record<ColorVariant, { bg: string; text: string }> = {
  blue: { bg: 'from-blue-100 to-blue-50', text: 'text-blue-600' },
  purple: { bg: 'from-purple-100 to-purple-50', text: 'text-purple-600' },
  orange: { bg: 'from-orange-100 to-orange-50', text: 'text-orange-600' },
  yellow: { bg: 'from-yellow-100 to-yellow-50', text: 'text-yellow-600' },
  red: { bg: 'from-red-100 to-red-50', text: 'text-red-600' },
  pink: { bg: 'from-pink-100 to-pink-50', text: 'text-pink-600' },
  green: { bg: 'from-green-100 to-green-50', text: 'text-green-600' },
  indigo: { bg: 'from-indigo-100 to-indigo-50', text: 'text-indigo-600' },
  teal: { bg: 'from-teal-100 to-teal-50', text: 'text-teal-600' },
}

interface RoleCardProps {
  title: string
  description: string
  icon: ReactNode
  tools: ToolIcon[]
  index?: number
  variant?: ColorVariant
}

export function RoleCard({ title, description, icon, tools, index = 0, variant = 'blue' }: RoleCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const colors = iconColorMap[variant]

  return (
    <div
      className={`group relative overflow-hidden rounded-lg sm:rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg animate-float-up p-3 sm:p-4 md:p-5 lg:p-6 min-h-60 sm:min-h-72 md:min-h-80 ${
        isHovered
          ? 'bg-primary-light-blue border-primary-light-blue'
          : 'bg-white border-slate-200'
      }`}
      style={{ animationDelay: `${index * 50}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content */}
      <div className="relative z-10">
        {/* Tools Icons - Top */}
        {/* <div className="flex gap-1.5 sm:gap-2 items-center mb-3 sm:mb-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group/tool relative h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-slate-100 flex items-center justify-center text-text-muted hover:bg-primary-light-blue hover:text-white transition-colors duration-200"
              title={tool.name}
            >
              <tool.icon size={14} className="sm:w-4 sm:h-4" />
            </div>
          ))}
        </div> */}

        {/* Icon Area */}
        <div className={`mb-3 sm:mb-4 h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gradient-to-br ${colors.bg} flex items-center justify-center ${colors.text}`}>
          {icon}
        </div>

        {/* Title */}
        <h3 className={`mb-1.5 sm:mb-2 text-base sm:text-lg md:text-xl font-semibold line-clamp-2 ${isHovered ? 'text-white' : 'text-text-dark'}`}>{title}</h3>

        {/* Description */}
        <p className={`mb-2 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3 ${isHovered ? 'text-blue-50' : 'text-text-muted'}`}>{description}</p>
      </div>
    </div>
  )
}
