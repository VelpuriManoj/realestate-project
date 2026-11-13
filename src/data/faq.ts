export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "What types of properties do you offer?",
    answer:
      "We plan and develop residential villas, apartments, and gated-community plots, each suited to a different stage of life and budget.",
  },
  {
    id: "faq-2",
    question: "Where are your projects located?",
    answer:
      "Our current developments are spread across Hyderabad's growing residential corridors. Each project page lists its exact location and connectivity.",
  },
  {
    id: "faq-3",
    question: "How can I schedule a site visit?",
    answer:
      "Call or email us with your preferred project and date, and our team will arrange a convenient time to walk the site with you.",
  },
  {
    id: "faq-4",
    question: "What documents are provided?",
    answer:
      "Buyers receive the standard set of title, layout, and approval documents relevant to the property, shared before and reviewed again at booking.",
  },
  {
    id: "faq-5",
    question: "How can I contact TEST?",
    answer:
      "You can reach us directly by phone or email — both are listed in the Contact section below and in the footer of this page.",
  },
  {
    id: "faq-6",
    question: "Do you provide investment guidance?",
    answer:
      "Our team can walk you through location fundamentals, pricing context, and typical timelines so you can make an informed decision.",
  },
];
