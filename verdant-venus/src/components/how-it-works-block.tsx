import { Cog, Lightbulb, ListChecks } from "@/lib/fontawesome-icons";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LabelIcon } from "./ui/label-icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from '@awesome.me/kit-c9f3baaeec/icons';
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";

interface Feature {
  id: string;
  icon: React.ReactNode;
  heading: string;
  description: string;
  image: string;
  url: string;
  isDefault: boolean;
}

interface HowItWorksBlockProps {
  features?: Feature[];
}

const HowItWorksBlock = ({
  features = [
    {
      id: "feature-1",
      heading: "Condition nodes",
      icon: <FontAwesomeIcon icon={byPrefixAndName.fas['filter']} className="text-lg" />,

      description:
        "Set rules to specify which transactions should follow this routing logic.",
      image: "/frame-1.svg",
      url: "https://shadcnblocks.com",
      isDefault: true,
    },
    {
      id: "feature-2",
      icon: <FontAwesomeIcon icon={byPrefixAndName.fas['lightbulb-on']} className="text-lg" />,

      heading: "Action nodes",
      description:
        "Decide how transactions will be distributed across the selected routes.",
        image: "/frame-2.svg",
        url: "https://shadcnblocks.com",
      isDefault: false,
    },
    {
      id: "feature-3",
      icon: <FontAwesomeIcon icon={byPrefixAndName.fas['sparkles']} className="text-lg" />,
      heading: "Route nodes",
      description:
        "Choose payment providers and methods you wish to route transactions through.",
        image: "/frame-3.svg",
        url: "https://shadcnblocks.com",
      isDefault: false,
    },
  ],
}: HowItWorksBlockProps) => {
  const defaultTab =
    features.find((tab) => tab.isDefault)?.id || features[0].id;

  return (
    <section className="mx-0 md:mx-2">
    <section className="bg-zinc-950 pb-8 md:rounded-t-[48px] rounded-t-[32px]">
      <div className="container pt-48">
      <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      >
          <SectionHeader
              theme="dark"
              icon={
                <FontAwesomeIcon
                  icon={byPrefixAndName.fas["arrow-progress"]}
                  className="text-md text-blue-400"
                />
              }
              label="Workflow"
              title={
                <>
              Turn rules into payment          
                </>
              }
              description={
                <>
              Set up and automate smart routing rules and actions so every transaction is processed optimally. 
              Switch between tabs to see how a transaction moves from logic to execution. 
                </>
              }
            />
          </motion.section>
          <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Tabs defaultValue={defaultTab} className="p-0">
          <TabsList className="bg-zinc-950 flex h-auto w-full flex-col gap-2 p-0 md:flex-row">
            {features.map((tab) => {
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`border-zinc-800 data-[state=active]:bg-zinc-900 group flex w-full flex-col items-start justify-start gap-3 whitespace-normal rounded-md border p-4 text-left shadow-none transition-opacity duration-200 hover:opacity-80 data-[state=active]:shadow-none ${
                    tab.isDefault ? "" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 md:items-start">
                    {tab.icon && (
                      <span className="text-zinc-600 group-data-[state=active]:text-amber-400 flex size-6 items-center justify-center rounded-md transition-opacity duration-200">
                        {tab.icon}
                      </span>
                    )}
                    <p className="text-primary-foreground text-xl font-semibold transition-opacity duration-200">
                      {tab.heading}
                    </p>
                  </div>
                  <p className="text-base text-zinc-500 group-data-[state=active]:text-zinc-400 font-normal transition-opacity duration-200 md:block">
                    {tab.description}
                  </p>
                </TabsTrigger>
              );
            })}
          </TabsList>
          {features.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.id}
              className="transition-opacity duration-300"
            >
              <img
                src={tab.image}
                alt={tab.heading}
                className="w-full object-cover transition-opacity duration-300"
              />
            </TabsContent>
          ))}
        </Tabs>
        </motion.section>
      </div>
    </section>
    </section>
  );
};

export { HowItWorksBlock };

