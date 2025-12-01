'use client';

import { motion } from "framer-motion";

import { LabelIcon } from "@/components/ui/label-icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from '@awesome.me/kit-c9f3baaeec/icons';

interface GlossaryIcon {
  iconName: string;
  iconPrefix?: 'fas' | 'far' | 'fal' | 'fad' | 'fab';
}

interface GlossaryTextPart {
  text: string;
  icon?: GlossaryIcon;
}

interface GlossaryBlockProps {
  label?: {
    text: string;
    iconName: string;
    iconPrefix?: 'fas' | 'far' | 'fal' | 'fad' | 'fab';
  };
  heading?: {
    prefix: string;
    main: string;
  };
  description?: {
    parts: GlossaryTextPart[];
  };
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
    return byPrefixAndName.fas[iconName] || byPrefixAndName.far[iconName];
  } catch (error) {
    console.warn(`GlossaryBlock icon not found: ${iconPrefix}/${iconName}`);
    return null;
  }
};

const GlossaryBlock = ({
  label = {
    text: "Glossary",
    iconName: "book-font",
    iconPrefix: "fas",
  },
  heading = {
    prefix: "But what are",
    main: "routing and cascading?",
  },
  description = {
    parts: [
      { text: "Payment & payout routing selects the best provider path for each transaction using rules you define: " },
      { text: "conditions pinpoint the payments in scope, ", icon: { iconName: "filter", iconPrefix: "far" } },
      { text: "action decides how to distribute, ", icon: { iconName: "lightbulb-on", iconPrefix: "far" } },
      { text: "and ", icon: { iconName: "building-columns", iconPrefix: "far" } },
      { text: "routes specify where to send them." },
    ],
  },
}: GlossaryBlockProps) => {
  const labelIcon = getIcon(label.iconName, label.iconPrefix || "fas");
  
  // Рендеримо опис з частинами тексту та іконками
  const renderDescription = () => {
    if (!description.parts || description.parts.length === 0) {
      return null;
    }

    return (
      <>
        {description.parts.map((part, index) => {
          const iconComponent = part.icon ? getIcon(part.icon.iconName, part.icon.iconPrefix || "far") : null;
          return (
            <span key={index}>
              {iconComponent && (
                <FontAwesomeIcon 
                  icon={iconComponent} 
                  className="text-md ml-1 mr-1 text-primary" 
                />
              )}
              {part.text}
            </span>
          );
        })}
      </>
    );
  };

  return (
    <section className="py-8">
       <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      >
      <div className="container">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-4 md:w-1/3">
            {labelIcon && (
              <LabelIcon icon={<FontAwesomeIcon icon={labelIcon} className="text-md text-amber-500"/>}>
                {label.text}
              </LabelIcon>
            )}
            <h2 className="text-3xl font-semibold">
              <span className="text-zinc-500">{heading.prefix}</span>
              <br />
              {heading.main}
            </h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-zinc-700 mx-auto max-w-3xl font-normal md:text-xl md:mt-8">
              {renderDescription()}
            </p>
          </div>
        </div>
      </div>
      </motion.section>
    </section>
  );
};

export { GlossaryBlock };

