import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from '@awesome.me/kit-c9f3baaeec/icons';
import { motion } from "framer-motion";

interface AdditionalFeature {
  title: string;
  text: string;
  iconName: string;
  iconPrefix?: 'fas' | 'far' | 'fal' | 'fad' | 'fab';
}

interface AdditionalFeaturesBlockProps {
  features?: AdditionalFeature[];
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
    console.warn(`AdditionalFeaturesBlock icon not found: ${iconPrefix}/${iconName}`);
    return null;
  }
};

const AdditionalFeaturesBlock = ({
  features = [
    {
      title: "Multi-currency",
      text: "Route only currency-compatible providers and pairs.",
      iconName: "sliders",
      iconPrefix: "fas",
    },
    {
      title: "Version history",
      text: "Draft, publish, and roll back routing changes with a full audit trail.",
      iconName: "code-branch",
      iconPrefix: "fas",
    },
    {
      title: "Rule sections",
      text: "High-level blocks that split data into units, helping organise conditions.",
      iconName: "list",
      iconPrefix: "fas",
    },
    {
      title: "JSON import/export",
      text: "Move rules between environments and keep them as code.",
      iconName: "sparkles",
      iconPrefix: "fas",
    },
  ],
}: AdditionalFeaturesBlockProps) => {
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
          {features.map((item, index) => {
            const icon = getIcon(item.iconName, item.iconPrefix || 'fas');
            
            return (
              <div
                key={index}
                className="flex shrink grow basis-full flex-col items-start justify-between p-6 sm:basis-1/2 md:basis-1/4 lg:basis-1/4"
              >
                <div className="mb-3 flex items-center justify-start gap-3">
                  {icon && (
                    <FontAwesomeIcon icon={icon} className="text-md text-zinc-600"/>
                  )}
                  <h1 className="text-lg font-medium text-primary-foreground/80">{item.title}</h1>
                </div>
                <p className="text-zinc-500 text-sm font-normal">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      </motion.section>
    </section>
    </section>
  );
};

export { AdditionalFeaturesBlock };

