'use client'

import { ReactNode, useState } from 'react'
import { Type as type, LucideIcon } from 'lucide-react'

interface ToolIcon {
  icon: LucideIcon
  name: string
}

interface RoleCardProps {
  title: string
  description: string
  icon: ReactNode
  tools: ToolIcon[]
  index?: number
}

export function RoleCard({ title, description, icon, tools, index = 0 }: RoleCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-200 hover:-translate-y-1 animate-float-up p-5 ${
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
        <div className="flex gap-2 items-center mb-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group/tool relative h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-text-muted hover:bg-primary-light-blue hover:text-white transition-colors duration-200"
              title={tool.name}
            >
              <tool.icon size={16} />
            </div>
          ))}
        </div>

        {/* Icon Area */}
        <div className="mb-4 h-12 w-12 rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center text-primary-dark-blue">
          {icon}
        </div>

        {/* Title */}
        <h3 className={`mb-2 text-lg font-semibold ${isHovered ? 'text-white' : 'text-text-dark'}`}>{title}</h3>

        {/* Description */}
        <p className={`mb-4 text-sm leading-relaxed ${isHovered ? 'text-blue-50' : 'text-text-muted'}`}>{description}</p>
      </div>
    </div>
  )
}
