"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { usePersonalization } from "@/lib/personalization";
import { BIZ } from "@/config/biz";
import { cn } from "@/lib/utils";

const categories: Record<string, string> = {
  all: "All",
  pricing: "Pricing",
  service: "Service",
  scheduling: "Scheduling",
};

// Tag each FAQ with a category
const categorizedFaqs = [
  { ...BIZ.faqs[0], category: "pricing" },
  { ...BIZ.faqs[1], category: "service" },
  { ...BIZ.faqs[2], category: "scheduling" },
  { ...BIZ.faqs[3], category: "service" },
  { ...BIZ.faqs[4], category: "service" },
  { ...BIZ.faqs[5], category: "scheduling" },
];

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      layout
      className={cn(
        "border border-white/[0.06] transition-colors duration-300",
        isOpen ? "bg-warm-gray/50 border-accent/10" : "bg-transparent"
      )}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-6 text-left group"
      >
        <span className={cn(
          "font-satoshi font-medium text-base sm:text-lg transition-colors duration-300",
          isOpen ? "text-stone" : "text-stone-dim group-hover:text-accent"
        )}>
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <Plus className={cn(
            "h-5 w-5 transition-colors duration-300",
            isOpen ? "text-accent" : "text-stone-dim/40 group-hover:text-accent/60"
          )} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="font-satoshi text-stone-dim text-base pb-6 px-6 leading-relaxed max-w-xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const biz = usePersonalization();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Inject dynamic city/phone into FAQ answers
  const faqs = categorizedFaqs.map((faq) => ({
    ...faq,
    a: faq.a
      .replace(/the city/g, biz.city)
      .replace(/Call or text us/g, `Call or text us at ${biz.phone}`)
      .replace(/\(503\) 555-0100/g, biz.phone),
  }));

  const filteredFaqs = selectedCategory === "all"
    ? faqs
    : faqs.filter((f) => f.category === selectedCategory);

  return (
    <SectionWrapper id="faq" reveal="up" className="bg-warm-gray py-20 sm:py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          {/* ═══ HOOK ═══ */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-clash font-bold text-4xl sm:text-5xl leading-[0.92] tracking-tight mb-6 text-stone">
              Questions?
            </h2>
            <p className="font-satoshi text-stone-dim/60 text-sm leading-relaxed max-w-xs mb-8">
              Or just call{" "}
              <a href={`tel:${biz.phoneRaw}`} className="text-accent/60 hover:text-accent transition-colors">
                {biz.phone}
              </a>
            </p>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {Object.entries(categories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => { setSelectedCategory(key); setOpenIndex(null); }}
                  className={cn(
                    "relative overflow-hidden whitespace-nowrap rounded-sm border px-3 py-1.5 text-xs font-medium font-satoshi uppercase tracking-[0.1em] transition-colors duration-300",
                    selectedCategory === key
                      ? "border-accent text-white"
                      : "border-white/[0.08] text-stone-dim/60 hover:text-stone hover:border-white/[0.15]"
                  )}
                >
                  <span className="relative z-10">{label}</span>
                  <AnimatePresence>
                    {selectedCategory === key && (
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "100%" }}
                        transition={{ duration: 0.4, ease: "backIn" }}
                        className="absolute inset-0 z-0 bg-accent"
                      />
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>
          </div>

          {/* ═══ BODY ═══ */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {filteredFaqs.map((faq, i) => (
                  <FAQItem
                    key={`${selectedCategory}-${i}`}
                    question={faq.q}
                    answer={faq.a}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
