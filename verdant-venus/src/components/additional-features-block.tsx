import { Code, GitBranch, List, Sparkles } from "@/lib/fontawesome-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from '@awesome.me/kit-c9f3baaeec/icons';
import { motion } from "framer-motion";

const integrations = [
  {
    icon: <FontAwesomeIcon icon={byPrefixAndName.fas['sliders']} className="text-md text-zinc-600"/>,
    title: "Multi-currency",
    text: "Route only currency-compatible providers and pairs.",
  },
  {
    icon: <FontAwesomeIcon icon={byPrefixAndName.fas['code-branch']} className="text-md text-zinc-600"/>,
    title: "Version history",
    text: "Draft, publish, and roll back routing changes with a full audit trail.",
  },
  {
    icon: <FontAwesomeIcon icon={byPrefixAndName.fas['list']} className="text-md text-zinc-600"/>,
    title: "Rule sections",
    text: "High-level blocks that split data into units, helping organise conditions.",
  },
  {
    icon: <FontAwesomeIcon icon={byPrefixAndName.fas['sparkles']} className="text-md text-zinc-600"/>,
    title: "JSON import/export",
    text: "Move rules between environments and keep them as code.",
  },
];

const AdditionalFeaturesBlock = () => {
  return (
    <section className="mx-0 md:mx-2">
    <section className="bg-zinc-950 pb-16">
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      >
      <div className="container">
        <div className="flex flex-wrap items-start justify-between border-t pb-16 border-zinc-900">
          {integrations.map((item, index, arr) => (
            <div
              key={index}
              className="flex shrink grow basis-full flex-col items-start justify-between p-6 sm:basis-1/2 md:basis-1/4 lg:basis-1/4"
            >
              <div className="mb-3 flex items-center justify-start gap-3">
                {item.icon}
                <h1 className="text-lg font-semibold text-primary-foreground/80">{item.title}</h1>
              </div>
              <p className="text-zinc-500 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      </motion.section>
    </section>
    </section>
  );
};

export { AdditionalFeaturesBlock };

