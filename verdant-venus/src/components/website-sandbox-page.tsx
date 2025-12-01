import { Faq7 } from "@/components/faq7";
import { Footer3 } from "@/components/footer3";
import { Hero21 } from "@/components/hero21";
import { Navbar3 } from "@/components/navbar3";
import { Feature35 } from "@/components/feature35";
import { Feature43 } from "@/components/feature43";
import { Feature51 } from "@/components/feature51";
import { Feature159 } from "@/components/feature159";
import { Feature69 } from "@/components/feature69";
import { Feature72 } from "@/components/feature72";
import { Cta12 } from "@/components/cta12";
import { Feature26 } from "@/components/feature26";
import { Feature57 } from "@/components/feature57";
import { Testimonial6 } from "@/components/testimonial6";
import { Cta3 } from "@/components/cta3";

const faqItems = [
  {
    id: "faq-1",
    question: "What is a FAQ?",
    answer:
      "A FAQ is a list of frequently asked questions and answers on a particular topic.",
  },
  {
    id: "faq-2",
    question: "What is the purpose of a FAQ?",
    answer:
      "The purpose of a FAQ is to provide answers to common questions and help users find the information they need quickly and easily.",
  },
  {
    id: "faq-3",
    question: "How do I create a FAQ?",
    answer:
      "To create a FAQ, you need to compile a list of common questions and answers on a particular topic and organize them in a clear and easy-to-navigate format.",
  },
  {
    id: "faq-4",
    question: "What are the benefits of a FAQ?",
    answer:
      "The benefits of a FAQ include providing quick and easy access to information, reducing the number of support requests, and improving the overall user experience.",
  },
  {
    id: "faq-5",
    question: "How should I organize my FAQ?",
    answer:
      "You should organize your FAQ in a logical manner, grouping related questions together and ordering them from most basic to more advanced topics.",
  },
  {
    id: "faq-6",
    question: "How long should FAQ answers be?",
    answer:
      "FAQ answers should be concise and to the point, typically a few sentences or a short paragraph is sufficient for most questions.",
  },
  {
    id: "faq-7",
    question: "Should I include links in my FAQ?",
    answer:
      "Yes, including links to more detailed information or related resources can be very helpful for users who want to learn more about a particular topic.",
  },
];

export default function WebsiteSandboxPage() {
  return (
    <>
      <header className="border-b">
        <Navbar3 />
      </header>
      <main className="pt-[72px]">
        <Hero21 />
        <Feature35 />
        <Feature43 />
        <Feature51 />
        <Feature159 />
        <Feature69 />
        <Feature72 />
        <Cta12 />
        <Feature26 />
        <Feature57 />
        <Testimonial6 />
        <Cta3 />
        <Faq7
          title="Frequently asked questions"
          description="Find answers to common questions about our products. Can't find what you're looking for? Contact our support team."
          items={faqItems}
        />
      </main>
      <Footer3 />
    </>
  );
}


