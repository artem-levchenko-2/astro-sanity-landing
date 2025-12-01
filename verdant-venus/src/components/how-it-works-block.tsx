import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from '@awesome.me/kit-c9f3baaeec/icons';
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";

interface HowItWorksFeature {
  id: string;
  heading: string;
  description: string;
  iconName: string;
  iconPrefix?: 'fas' | 'far' | 'fal' | 'fad' | 'fab';
  image: string;
  url: string;
  isDefault: boolean;
}

interface HowItWorksHeader {
  label: string;
  iconName: string;
  iconPrefix?: 'fas' | 'far' | 'fal' | 'fad' | 'fab';
  title: string;
  description: string;
}

interface HowItWorksBlockProps {
  header?: HowItWorksHeader;
  features?: HowItWorksFeature[];
}

// Функція для отримання іконки за назвою
const getIcon = (iconName: string, iconPrefix: string = 'fas') => {
  try {
    const prefixMap: Record<string, any> = {
      'fas': byPrefixAndName.fas,
      'far': byPrefixAndName.far,
      'fal': byPrefixAndName.fal,
      'fad': byPrefixAndName.fad,
      'fab': byPrefixAndName.fab,
    };
    
    const iconSet = prefixMap[iconPrefix];
    if (iconSet && iconSet[iconName]) {
      return iconSet[iconName];
    }
    
    // Fallback
    return byPrefixAndName.fas[iconName] || byPrefixAndName.fad[iconName];
  } catch (error) {
    console.warn(`HowItWorksBlock icon not found: ${iconPrefix}/${iconName}`);
    return null;
  }
};

const HowItWorksBlock = ({
  header = {
    label: "Workflow",
    iconName: "arrow-progress",
    iconPrefix: "fas",
    title: "Turn rules into payment",
    description: "Set up and automate smart routing rules and actions so every transaction is processed optimally. Switch between tabs to see how a transaction moves from logic to execution.",
  },
  features = [
    {
      id: "feature-1",
      heading: "Condition nodes",
      description: "Set rules to specify which transactions should follow this routing logic.",
      iconName: "filter",
      iconPrefix: "fas",
      image: "/frame-1.svg",
      url: "https://shadcnblocks.com",
      isDefault: true,
    },
    {
      id: "feature-2",
      heading: "Action nodes",
      description: "Decide how transactions will be distributed across the selected routes.",
      iconName: "lightbulb-on",
      iconPrefix: "fas",
      image: "/frame-2.svg",
      url: "https://shadcnblocks.com",
      isDefault: false,
    },
    {
      id: "feature-3",
      heading: "Route nodes",
      description: "Choose payment providers and methods you wish to route transactions through.",
      iconName: "sparkles",
      iconPrefix: "fas",
      image: "/frame-3.svg",
      url: "https://shadcnblocks.com",
      isDefault: false,
    },
  ],
}: HowItWorksBlockProps) => {
  const defaultTab =
    features.find((tab) => tab.isDefault)?.id || features[0]?.id;
  
  const headerIcon = getIcon(header.iconName, header.iconPrefix || "fas");

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
                headerIcon && (
                  <FontAwesomeIcon
                    icon={headerIcon}
                    className="text-md text-blue-400"
                  />
                )
              }
              label={header.label}
              title={header.title}
              description={header.description}
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
              const tabIcon = getIcon(tab.iconName, tab.iconPrefix || "fas");
              
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`border-zinc-800 data-[state=active]:bg-zinc-900 group flex w-full flex-col items-start justify-start gap-3 whitespace-normal rounded-md border p-4 text-left shadow-none transition-opacity duration-200 hover:opacity-80 data-[state=active]:shadow-none`}
                >
                  <div className="flex items-center gap-2 md:items-start">
                    {tabIcon && (
                      <span className="text-zinc-600 group-data-[state=active]:text-amber-400 flex size-6 items-center justify-center rounded-md transition-opacity duration-200">
                        <FontAwesomeIcon icon={tabIcon} className="text-lg" />
                      </span>
                    )}
                    <p className="text-primary-foreground text-xl font-medium transition-opacity duration-200">
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

