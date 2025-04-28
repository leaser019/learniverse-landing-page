import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Award, BookOpen, Clock, Lightbulb, Users, Zap } from "lucide-react";
import React from "react";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
  icon: React.ReactNode;
}

const FAQList: FAQProps[] = [
  {
    question: "How does Learniverse make my learning more effective?",
    answer:
      "Learniverse uses advanced AI technology to personalize your learning journey based on your strengths, weaknesses, and goals. Our platform combines interactive learning methods, gamification, and machine learning algorithms to optimize your learning process, helping you progress 3-5 times faster than traditional methods.",
    value: "item-1",
    icon: <Zap className="h-5 w-5 text-blue-500" />,
  },
  {
    question: "How do I get started with Learniverse?",
    answer:
      "Sign up for a free account on our website, complete a short assessment test so we can understand your learning needs, then explore our rich library of personalized learning resources. You can access Learniverse from any device with internet connection - computer, tablet, or smartphone.",
    value: "item-2",
    icon: <BookOpen className="h-5 w-5 text-blue-500" />,
  },
  {
    question: "What subjects and courses does Learniverse offer?",
    answer:
      "Learniverse offers over 1,000+ courses across various fields from STEM, languages, arts, to business and personal development. Our courses are designed by top experts from prestigious universities and leading companies, ensuring high-quality content that's up-to-date with industry trends.",
    value: "item-3",
    icon: <Lightbulb className="h-5 w-5 text-blue-500" />,
  },
  {
    question: "Can I learn with friends on Learniverse?",
    answer:
      "Absolutely! Learniverse integrates collaborative learning features like virtual study rooms, group projects, and discussion forums. You can invite friends to join courses together, organize joint study sessions, and even create learning competitions to boost motivation and social connection in your learning journey.",
    value: "item-4",
    icon: <Users className="h-5 w-5 text-blue-500" />,
  },
  {
    question: "Does Learniverse provide certificates after completing courses?",
    answer:
      "Yes, Learniverse issues digital certificates recognized by many businesses and educational institutions. These certificates validate the skills and knowledge you've acquired, are integrated with blockchain technology to ensure authenticity, and can be easily shared on LinkedIn or your resume.",
    value: "item-5",
    icon: <Award className="h-5 w-5 text-blue-500" />,
  },
  {
    question: "How much time do I need to spend daily on Learniverse?",
    answer:
      "Learniverse is designed to fit your busy schedule. Lessons are broken down into 15-30 minute sessions, easy to integrate into your day. Our AI algorithm also suggests optimal learning times based on performance data, helping you maintain progress even when you can only study for a few minutes each day.",
    value: "item-6",
    icon: <Clock className="h-5 w-5 text-blue-500" />,
  },
];

const FAQItem = ({ question, answer, value, icon }: FAQProps) => (
  <AccordionItem
    key={value}
    value={value}
    className="border-b border-blue-200 dark:border-blue-500/20 last:border-b-0 px-4"
  >
    <AccordionTrigger className="text-left py-4 px-2 rounded-md text-blue-800 dark:text-blue-300">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
          {icon}
        </div>
        <span className="font-medium">{question}</span>
      </div>
    </AccordionTrigger>

    <AccordionContent className="text-blue-700 dark:text-blue-300 px-2 pb-4">
      <div className="pl-10 pr-2 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        {answer}
      </div>
    </AccordionContent>
  </AccordionItem>
);

export const FAQSection = () => {
  return (
    <section id="faq" className="container py-16 bg-white dark:bg-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold tracking-wider mb-2 text-blue-500 dark:text-blue-400">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-blue-900 dark:text-blue-100">
            Get Your Answers
          </h2>

          <p className="text-blue-500 dark:text-blue-300 max-w-2xl mx-auto">
            Discover answers to commonly asked questions about Learniverse
            learning platform and how we can help you achieve your educational
            goals.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full bg-white dark:bg-card rounded-lg border border-blue-200 dark:border-blue-500/20 shadow-sm"
        >
          <div className="p-2">
            {FAQList.map((faqItem) => (
              <FAQItem key={faqItem.value} {...faqItem} />
            ))}
          </div>
        </Accordion>
      </div>
    </section>
  );
};
