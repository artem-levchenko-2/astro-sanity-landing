'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from '@awesome.me/kit-c9f3baaeec/icons';
import { motion } from "framer-motion";

interface Feature {
  heading: string;
  description: string;
  iconName: string; // Назва іконки з Font Awesome (наприклад, 'building-columns', 'repeat')
  iconPrefix?: 'fas' | 'far' | 'fal' | 'fad' | 'fab'; // Префікс іконки, за замовчуванням 'fad'
}

interface BenefitsBlockProps {
  title?: string;
  features?: Feature[];
  buttonText?: string;
  buttonUrl?: string;
}

// Функція для отримання іконки за назвою
const getIcon = (iconName: string, iconPrefix: string = 'fad') => {
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
    
    // Fallback на fad якщо не знайдено
    return byPrefixAndName.fad[iconName] || byPrefixAndName.fas[iconName];
  } catch (error) {
    console.warn(`Icon not found: ${iconPrefix}/${iconName}`);
    return null;
  }
};

const BenefitsBlock = ({
  title = "Fully featured components for Shadcn UI & Tailwind",
  features = [
    {
      heading: "Route",
      description:
        "Choose the best provider path per BIN, geo, currency, and amount — lift approvals.",
      iconName: "building-columns",
      iconPrefix: "fad",
    },
    {
      heading: "Failover",
      description:
        "Cascading retries eligible declines with idempotency — recover without re‑entry.",
      iconName: "repeat",
      iconPrefix: "fad",
    },
    {
      heading: "Control",
      description:
        "Drag'n'drop rule editor with Draft/Publish, RBAC, and JSON import/export — own the logic.",
      iconName: "sliders",
      iconPrefix: "fad",
    },
    {
      heading: "Optimise",
      description:
        "Weigh fees, FX, and scheme rules — balance cost and conversion in real time.",
      iconName: "gauge-max",
      iconPrefix: "fad",
    },
  ]
}: BenefitsBlockProps) => {
  return (
    <section className="py-32 mb-16">
      <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      >
      <div className="container">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const icon = getIcon(feature.iconName, feature.iconPrefix || 'fad');
            
            return (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="bg-accent mb-5 flex size-16 items-center justify-center rounded-lg">
                  {icon && (
                    <FontAwesomeIcon 
                      icon={icon} 
                      className="text-3xl" 
                      style={{color: "var(--color-primary)"}} 
                    />
                  )}
                </div>
                <h3 className="mb-2 text-2xl font-semibold">{feature.heading}</h3>
                <p className="text-zinc-700">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      </motion.section>
    </section>
  );
};

export { BenefitsBlock };

