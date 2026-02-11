'use client'

import { TestimonialCard } from './testimonial-card'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      track: 'Data Science & Analytics',
      quote:
        'Working with DSHub was a complete game-changer for our business. Their attention to detail, creative thinking, and innovative approach truly stand out.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
      rating: 5,
      tags: ['Data Analysis', 'Machine Learning', 'Python'],
    },
    {
      name: 'Alex Rodriguez',
      track: 'Frontend Development',
      quote:
        'The structured learning path and collaborative environment helped me transition smoothly into my first tech role. Best internship experience!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      rating: 5,
      tags: ['React', 'Web Design', 'UI Development'],
    },
    {
      name: 'Jordan Kim',
      track: 'Backend Development',
      quote:
        'The combination of real projects and mentorship truly prepared me for industry work. I built production-ready systems and learned best practices.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
      rating: 5,
      tags: ['Node.js', 'API Design', 'Database Architecture'],
    },
    {
      name: 'Maya Patel',
      track: 'AI & Machine Learning',
      quote:
        'The mentors here are incredible. They helped me understand complex concepts and apply them to real-world problems with confidence.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      rating: 5,
      tags: ['AI Models', 'TensorFlow', 'Research'],
    },
    {
      name: 'James Wilson',
      track: 'Cybersecurity & Ethical Hacking',
      quote:
        'Amazing learning experience with hands-on projects. DSHub truly prepares you for a career in tech with practical, applicable skills.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop',
      rating: 5,
      tags: ['Security', 'Penetration Testing', 'Compliance'],
    },
    {
      name: 'Lisa Wong',
      track: 'Graphic & UI/UX Design',
      quote:
        'Incredible mentorship and real-world projects made my internship experience unforgettable. I grew as a designer and a professional.',
      image: 'https://images.unsplash.com/photo-1517841905240-4e15aed266c4?w=300&h=300&fit=crop',
      rating: 5,
      tags: ['Design Systems', 'User Research', 'Figma'],
    },
  ]

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-8 bg-bg-light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-2 sm:mb-3 md:mb-4">
            Voices From Our Interns
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-muted px-4">
            Engineers and designers united by a mission to transform mobility technology
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="px-1 animate-fade-in">
                  <TestimonialCard
                    index={index}
                    quote={testimonial.quote}
                    track={testimonial.track}
                    name={testimonial.name}
                    image={testimonial.image}
                    rating={testimonial.rating}
                    tags={testimonial.tags}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4 sm:mt-6 md:mt-8">
            <CarouselPrevious className="relative position-static h-12 w-12 sm:h-14 sm:w-14" />
            <CarouselNext className="relative position-static h-12 w-12 sm:h-14 sm:w-14" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
