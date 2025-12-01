"use client";

import { ChevronDown } from "@/lib/fontawesome-icons";
import { useEffect, useState } from "react";

import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-c9f3baaeec/icons";
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";

interface ExpandableFeature {
  id: string;
  title: string;
  description: string;
  description2?: string;
  iconName: string;
  iconPrefix?: 'fas' | 'far' | 'fal' | 'fad' | 'fab';
  image: string;
}

interface ExpandableHeader {
  label: string;
  iconName: string;
  iconPrefix?: 'fas' | 'far' | 'fal' | 'fad' | 'fab';
  title: string;
  description: string;
}

interface FeaturesExpandableBlockProps {
  header?: ExpandableHeader;
  features?: ExpandableFeature[];
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
    console.warn(`FeaturesExpandableBlock icon not found: ${iconPrefix}/${iconName}`);
    return null;
  }
};

const FeaturesExpandableBlock = ({
  header = {
    label: "Actions",
    iconName: "lightbulb-on",
    iconPrefix: "fas",
    title: "Six ways\nto distribute traffic",
    description: "Pick the behaviour that best fits your goal;\nevery Action is composable and previewable.",
  },
  features = [
    {
      id: "feature-1",
      title: "Feature 1",
      description: "Nam vitae molestie arcu. Quisque eu libero orci. Aliquam imperdiet magna nec massa consectetur, id interdum ante congue.",
      description2: "Suspendisse potenti. Sed vel tortor ut elit efficitur vehicula. Integer nec turpis sed justo aliquet bibendum.",
      iconName: "filter",
      iconPrefix: "fas",
      image: "/feature-1.svg",
    },
    {
      id: "feature-2",
      title: "Feature 2",
      description: "Nam vitae molestie arcu. Quisque eu libero orci. Aliquam imperdiet magna nec massa consectetur, id interdum ante congue.",
      description2: "Suspendisse potenti. Sed vel tortor ut elit efficitur vehicula. Integer nec turpis sed justo aliquet bibendum.",
      iconName: "lightbulb-on",
      iconPrefix: "fas",
      image: "/feature-1.svg",
    },
    {
      id: "feature-3",
      title: "Feature 3",
      description: "Nam vitae molestie arcu. Quisque eu libero orci. Aliquam imperdiet magna nec massa consectetur, id interdum ante congue.",
      description2: "Suspendisse potenti. Sed vel tortor ut elit efficitur vehicula. Integer nec turpis sed justo aliquet bibendum.",
      iconName: "sparkles",
      iconPrefix: "fas",
      image: "/feature-1.svg",
    },
    {
      id: "feature-4",
      title: "Feature 4",
      description: "Nam vitae molestie arcu. Quisque eu libero orci. Aliquam imperdiet magna nec massa consectetur, id interdum ante congue.",
      description2: "Suspendisse potenti. Sed vel tortor ut elit efficitur vehicula. Integer nec turpis sed justo aliquet bibendum.",
      iconName: "bolt",
      iconPrefix: "fas",
      image: "/feature-1.svg",
    },
    {
      id: "feature-5",
      title: "Feature 5",
      description: "Nam vitae molestie arcu. Quisque eu libero orci. Aliquam imperdiet magna nec massa consectetur, id interdum ante congue.",
      description2: "Suspendisse potenti. Sed vel tortor ut elit efficitur vehicula. Integer nec turpis sed justo aliquet bibendum.",
      iconName: "shield",
      iconPrefix: "fas",
      image: "/feature-1.svg",
    },
    {
      id: "feature-6",
      title: "Feature 6",
      description: "Nam vitae molestie arcu. Quisque eu libero orci. Aliquam imperdiet magna nec massa consectetur, id interdum ante congue.",
      description2: "Suspendisse potenti. Sed vel tortor ut elit efficitur vehicula. Integer nec turpis sed justo aliquet bibendum.",
      iconName: "cube",
      iconPrefix: "fas",
      image: "/feature-1.svg",
    },
  ],
}: FeaturesExpandableBlockProps) => {
  const [selection, setSelection] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    carouselApi.scrollTo(selection);
  }, [carouselApi, selection]);
  
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setSelection(carouselApi.selectedScrollSnap());
    };
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  const handleItemClick = (index: number) => {
    setSelection(index);
  };

  return (
    <section className="mx-0 md:mx-2">
    <section className="py-32 bg-zinc-950">
      <div className="container">
        <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        >
        <SectionHeader
          theme="dark"
          icon={
            (() => {
              const headerIcon = getIcon(header.iconName, header.iconPrefix || "fas");
              return headerIcon ? (
                <FontAwesomeIcon
                  icon={headerIcon}
                  className="text-md text-amber-400"
                />
              ) : null;
            })()
          }
          label={header.label}
          title={
            <>
              {header.title.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < header.title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </>
          }
          description={
            <>
              {header.description.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < header.description.split('\n').length - 1 && <br />}
                </span>
              ))}
            </>
          }
        />
        <div className="flex flex-col gap-8 md:flex-row-reverse">
          {/* Carousel - visible only on desktop */}
          <div className="hidden md:block aspect-1/1 bg-accent overflow-clip rounded-3xl">
            <Carousel
              setApi={setCarouselApi}
              className="h-full w-full [&>div]:h-full"
            >
              <CarouselContent className="mx-0 h-full w-full">
                {features.map((feature) => (
                  <CarouselItem key={feature.id} className="px-0">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="flex shrink-0 flex-col md:w-1/2 md:pr-4 lg:text-left 2xl:pr-32">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            >
            <ul className="space-y-2">
              {features.map((feature, i) => {
                const isOpen = selection === i;
                return (
                  <li
                    key={feature.id}
                    className="data-open:bg-zinc-900 group relative w-full cursor-pointer px-6 py-3 transition items-start justify-start gap-3 whitespace-normal rounded-md p-4 text-left shadow-none transition-opacity duration-200 hover:opacity-80"
                    data-open={isOpen ? "true" : undefined}
                    onClick={() => handleItemClick(i)}
                  >
                    <div className="flex items-center justify-between gap-x-2">
                      <div className="flex items-center gap-3">
                        {(() => {
                          const featureIcon = getIcon(feature.iconName, feature.iconPrefix || "fas");
                          return featureIcon ? (
                            <span className="group-data-open:text-amber-400 text-zinc-600 flex items-center justify-center">
                              <FontAwesomeIcon icon={featureIcon} className="text-md" />
                            </span>
                          ) : null;
                        })()}
                        <div className="text-primary-foreground text-xl font-medium">
                          {feature.title}
                        </div>
                      </div>
                      <div className="text-zinc-700 group-hover:text-zinc-200 group-data-open:text-zinc-200 flex size-8 items-center justify-center rounded-full">
                        <ChevronDown className="group-data-open:rotate-180 size-4 shrink-0 transition-transform duration-200" />
                      </div>
                    </div>
                    <div className="group-data-open:block hidden text-base font-normal">
                      <p className="text-zinc-400 my-2">
                        {feature.description}
                      </p>
                      {feature.description2 && (
                        <p className="text-zinc-600 my-2 italic">
                          {feature.description2}
                        </p>
                      )}
                      {/* Image - visible only on mobile */}
                      {feature.image && (
                        <div className="md:hidden mt-2 overflow-hidden rounded-2xl border border-zinc-800">
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
            </motion.section>
          </div>
        </div>
        </motion.section>
      </div>
    </section>
    </section>
  );
};

export { FeaturesExpandableBlock };

