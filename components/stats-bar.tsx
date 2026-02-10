'use client'

import { useEffect, useState } from 'react'

export function StatsBar() {
  const [isVisible, setIsVisible] = useState(false)
  const stats = [
    { endNumber: 1200, label: 'Students Trained' },
    { endNumber: 9, label: 'Internship Tracks' },
    { endNumber: 0, label: 'Remote Collaboration', isSymbol: true },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('stats-section')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <section id="stats-section" className="bg-primary-light-blue py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="grid md:grid-cols-3 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.isSymbol ? (
                  '∞'
                ) : (
                  <Counter endNumber={stat.endNumber} isVisible={isVisible} />
                )}
              </div>
              <p className="text-base sm:text-lg text-blue-50 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Counter({ endNumber, isVisible }: { endNumber: number; isVisible: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startValue = 0
    const duration = 2000
    const increment = endNumber / (duration / 50)

    const timer = setInterval(() => {
      startValue += increment
      if (startValue >= endNumber) {
        setCount(endNumber)
        clearInterval(timer)
      } else {
        setCount(Math.floor(startValue))
      }
    }, 50)

    return () => clearInterval(timer)
  }, [isVisible, endNumber])

  return <>{count}+</>
}
