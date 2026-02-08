"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is an Integrated Facility Management Services?",
      answer: "Integrated Facility Management Services is one of the best ways to consolidate all services under a single management team and contract. The core intent of integrated facilities management services is to streamline communications and make everyday operations easier, deliver results quickly.",
    },
    {
      question: "What is your business model?",
      answer: "We operate on a comprehensive facility management model where we provide end-to-end services including housekeeping, maintenance, security, and other facility services under a single contract. This ensures seamless coordination and accountability.",
    },
    {
      question: "What are the various sizes of apartments being managed?",
      answer: "We manage facilities of all sizes - from small residential apartments to large commercial complexes, hospitals, hotels, malls, factories, warehouses, and educational institutes. Our flexible service model adapts to any scale of operations.",
    },
    {
      question: "Can you provide referrals of your customers and arrange site visits?",
      answer: "Yes, we can provide referrals from our existing clients including hospitals, commercial complexes, and residential societies. We can also arrange site visits to showcase our ongoing projects and the quality of our services.",
    },
    {
      question: "What are your USPs?",
      answer: "Our USPs include 20000+ satisfied clients, 4.9+ star ratings, recognition by Silicon India as one of the 10 most promising housekeeping services providers, professionally trained staff, 24/7 support, and transparent pricing with no hidden costs.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
            Find Out Answers Here
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="w-full py-5 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900 pr-8">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
