import { Quote } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'DSHub gave me hands-on experience with real projects and a supportive mentor community. I built a strong portfolio in just 3 months!',
      role: 'Former Data Science Intern',
    },
    {
      quote:
        'The structured learning path and collaborative environment helped me transition smoothly into my first tech role.',
      role: 'Former Frontend Development Intern',
    },
    {
      quote:
        'Best internship experience! The combination of real projects and mentorship truly prepared me for industry work.',
      role: 'Former Backend Development Intern',
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-dark mb-3">
            Voices From Our Interns
          </h2>
          <p className="text-lg text-text-muted">
            Engineers and designers united by a mission to transform mobility technology
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary-light-blue rounded-xl p-8 relative text-white"
            >
              {/* Quote Icon */}
              <Quote size={32} className="mb-4 opacity-50" />

              {/* Quote */}
              <p className="text-lg leading-relaxed mb-6 italic">{testimonial.quote}</p>

              {/* Role */}
              <div className="border-t border-blue-300 pt-4">
                <p className="font-semibold text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
