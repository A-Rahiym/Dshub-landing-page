'use client'

import { Quote, Star } from 'lucide-react'
import Image from 'next/image'

interface TestimonialCardProps {
  quote: string
  track: string
  name: string
  image: string
  index?: number
  rating?: number
  tags?: string[]
}

export function TestimonialCard({ quote, track, name, image, index = 0, rating = 5, tags = [] }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 relative h-full flex flex-col md:flex-row gap-6 border border-slate-200 hover:shadow-lg transition-shadow">
      {/* Left: Image */}
      <div className="flex-shrink-0 w-full md:w-48 lg:w-56">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="w-full h-64 md:h-72 rounded-lg object-cover"
        />
      </div>

      {/* Right: Content */}
      <div className="flex-grow flex flex-col justify-between">
        {/* Star Rating */}
        <div className="flex gap-1 mb-3 sm:mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={16} className="sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 text-text-dark font-medium">
          {quote}
        </p>

        {/* Secondary Text */}
        <p className="text-xs sm:text-sm text-text-muted mb-4 sm:mb-6">
          Their team delivered practical solutions tailored to our needs and helped streamline our processes for long-term success.
        </p>

        {/* Footer: Name and Track */}
        <div>
          <p className="font-semibold text-sm sm:text-base text-text-dark mb-2">
            — {name}, {track}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-slate-100 text-text-muted px-2 sm:px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
