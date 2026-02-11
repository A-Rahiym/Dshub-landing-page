import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "I just joined the internship. How do I get started?",
      answer:
        "You will receive:\n• A welcome email\n• An invitation to the interns WhatsApp group\n• Orientation meeting link\n• Access to project materials and guidelines\nIf you do not receive these within a few days, contact the support team.",
    },

    {
      question: "What if my premium access payment is not successful?",
      answer:
        "Please try the following:\n• Use a different ATM/debit card\n• Switch your internet connection\n• Retry after a few minutes\nIf the issue continues, contact the support team for assistance.",
    },

    {
      question: "How do I confirm that my payment was successful?",
      answer:
        "You will receive a payment receipt after a successful transaction. If you are unsure, send the receipt or transaction proof to the support team for confirmation.",
    },

    {
      question: "Can I pay in installments?",
      answer:
        "Installment payments are not available. The premium access requires a one-time payment to unlock all program benefits and mentorship features.",
    },

    {
      question: "Can I get a refund?",
      answer:
        "Refunds are only possible if:\n• The internship has not started\n• You mistakenly paid more than once\n• You submitted a request before onboarding begins\n\nRefunds are not issued after the internship has commenced or for inactivity during the program.",
    },

    {
      question: "Who do I contact for payment or access issues?",
      answer:
        "Contact the support team and include:\n• Your full name\n• Your selected track\n• Proof of payment\n• Email used during registration\nThis helps resolve your issue quickly.",
    },

    {
      question: "Can I join more than one track?",
      answer:
        "Yes, depending on your availability. However, we strongly recommend focusing on one track to get the best learning and practical experience during the internship.",
    },

    {
      question: "What benefits do Premium interns receive?",
      answer:
        "Premium interns who complete the internship requirements will:\n• Receive a certificate of completion\n• Get priority consideration for job and opportunity recommendations\n• Receive closer mentorship and project guidance during the program.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-2 sm:mb-3 md:mb-4">
            Frequently asked questions
          </h2>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          className="space-y-2.5 sm:space-y-3 md:space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-slate-200 rounded-lg px-3 sm:px-4 md:px-6 py-1 sm:py-2 data-[state=open]:bg-blue-50"
            >
              <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold text-text-dark hover:text-primary-light-blue">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm md:text-base text-text-muted leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
