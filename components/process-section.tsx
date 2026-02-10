'use client'

export function ProcessSection() {
  const steps = [
    {
      title: 'Application',
      description:
        'Submit your application, select your role, and tell us about your goals and interest in tech.',
    },
    {
      title: 'Onboarding & Orientation',
      description:
        'Attend orientation sessions where you learn how teams operate, how communication works, and how to use collaboration tools.',
    },
    {
      title: 'Work on real project tasks every week',
      description:
        'Work on real project tasks every week, attend stand-up meetings, submit deliverables, and receive structured feedback from mentors.',
    },
  ]

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-2 border-blue-200 m-6 rounded-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-text-dark mb-4">
              How DSHub Internship Works
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              A structured experience designed to simulate real team collaboration and prepare you for real industry work.
            </p>
          </div>

          {/* Right Side with SVG Curve */}
          <div className="relative h-96 flex items-center">
            <svg className="w-full h-full absolute" viewBox="0 0 400 400" preserveAspectRatio="none">
              {/* Curved line */}
              <path
                d="M 50 350 Q 150 300, 200 200 T 380 50"
                stroke="#63B4F5"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />

              {/* Circle nodes */}
              <circle cx="50" cy="350" r="16" fill="#63B4F5" />
              <circle cx="200" cy="200" r="16" fill="#63B4F5" />
              <circle cx="380" cy="50" r="16" fill="#63B4F5" />
            </svg>
            
            {/* Step contents positioned on the curve */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              <div className="w-full text-right pr-12 pt-0">
                <h4 className="font-bold text-text-dark text-sm mb-1">{steps[2].title}</h4>
                <p className="text-xs text-text-muted max-w-xs">{steps[2].description}</p>
              </div>
              <div className="w-full text-center">
                <h4 className="font-bold text-text-dark text-sm mb-1">{steps[1].title}</h4>
                <p className="text-xs text-text-muted max-w-xs mx-auto">{steps[1].description}</p>
              </div>
              <div className="w-full text-left pl-4 pb-0">
                <h4 className="font-bold text-text-dark text-sm mb-1">{steps[0].title}</h4>
                <p className="text-xs text-text-muted max-w-xs">{steps[0].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
