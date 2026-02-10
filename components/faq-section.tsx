import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

export function FAQSection() {
  const faqs = [
    {
      question: 'What is the DSHub Bootcamp all about?',
      answer:
        'DSHub Bootcamp is a comprehensive program designed to equip learners with practical skills in technology and digital innovation. Our curriculum is structured around real-world projects, mentorship, and industry collaboration to ensure you\'re job-ready upon completion.',
    },
    {
      question: 'Is this bootcamp suitable for complete beginners?',
      answer:
        'Yes! Our program is beginner-friendly with dedicated onboarding and foundational modules. You can also try Campedio for free on the Starter plan with up to 3 team members.',
    },
    {
      question: 'Do I need any prior tech experience to join?',
      answer:
        'No prior experience is required! We welcome all learners, from complete beginners to those with some background. Our instructors are trained to support learners at all levels.',
    },
    {
      question: 'How are the working hours structured?',
      answer:
        'The internship is flexible with core hours during business days. Most interns dedicate 20-30 hours per week to the program, allowing you to balance other commitments. Exact hours depend on your track and team arrangement.',
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-dark mb-3">
            Frequently asked questions
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-slate-200 rounded-lg px-6 data-[state=open]:bg-blue-50"
            >
              <AccordionTrigger className="text-lg font-semibold text-text-dark hover:text-primary-light-blue">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-text-muted leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
