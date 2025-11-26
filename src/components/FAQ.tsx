import { motion } from 'motion/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const faqs = [
  {
    question: 'Is Zoopol for both employers and workers?',
    answer: 'Yes! Employers post jobs and workers apply instantly.'
  },
  {
    question: 'How do workers get verified?',
    answer: 'Using a unique code provided by the employer.'
  },
  {
    question: 'Can employers hire multiple workers for one job?',
    answer: 'Yes, employers can select and approve multiple applicants.'
  },
  {
    question: 'How does payment work?',
    answer: 'Employers pay after verifying completion, with options like daily pay or one-time payment.'
  },
  {
    question: 'Do workers get rated?',
    answer: 'Yes, both employers and workers can rate each other for trust and transparency.'
  },
  {
    question: 'Is Zoopol safe to use?',
    answer: 'We ensure transparency, secure payments, and verified job processes.'
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-10 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-900 mb-4"
          >
            FAQ
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 max-w-2xl text-sm md:text-base"
            style={{ fontSize: '16px' }}
          >
            If you have any questions, don't hesitate to reach out – we are always here for you! We will gladly explain anything and help you understand.
          </motion.p>
        </div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-[#F4F8FB] rounded-2xl px-4 md:px-6 border-none"
              >
                <AccordionTrigger className="text-gray-900 hover:no-underline py-4 md:py-6 text-sm md:text-base text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 md:pb-6 text-sm md:text-base" style={{ fontSize: '16px' }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}