'use client';

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { LabelIcon } from "@/components/ui/label-icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from '@awesome.me/kit-c9f3baaeec/icons';


type HeroLabel = {
  text: string;
  iconName: string;
  iconPrefix?: 'fas' | 'far' | 'fal' | 'fad' | 'fab';
};

type HeroCta = {
  label: string;
};

type HeroBlockProps = {
  className?: string;
  backgroundImage?: string;
  label?: HeroLabel;
  headingStart?: string;
  headingMiddle?: string;
  headingEnd?: string;
  subheading?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  bottomTags?: HeroLabel[];
};

// Допоміжна функція для отримання іконки Font Awesome за префіксом та назвою
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

    // fallback
    return byPrefixAndName.fas[iconName] || byPrefixAndName.fad[iconName];
  } catch {
    console.warn(`HeroBlock icon not found: ${iconPrefix}/${iconName}`);
    return null;
  }
};

const HeroAnimation = () => {
  const [Lottie, setLottie] = useState<null | (typeof import("@lottielab/lottie-player/react"))["default"]>(null);

  useEffect(() => {
    let isMounted = true;

    import("@lottielab/lottie-player/react")
      .then((mod) => {
        if (isMounted) {
          setLottie(() => mod.default);
        }
      })
      .catch(() => {
        // ignore load errors on server
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!Lottie) {
    return null;
  }

  return (
    <Lottie
      src="https://cdn.lottielab.com/l/D51F5mwJiDymRN.json"
      autoplay
      loop
      className="w-full h-full"
    />
  );
};

const HeroBlock = ({
  className,
  backgroundImage = "/dots-bg.svg",
  label,
  headingStart,
  headingMiddle,
  headingEnd,
  subheading,
  primaryCta,
  secondaryCta,
  bottomTags,
}: HeroBlockProps) => {
  // Значення за замовчуванням
  const defaultLabel: HeroLabel = {
    text: "Routing & Cascading",
    iconName: "sitemap",
    iconPrefix: "fas",
  };
  
  const defaultHeadingStart = "Optimise your payment flows with";
  const defaultHeadingMiddle = "Smart routing &";
  const defaultHeadingEnd = "Cascading";
  const defaultSubheading = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus fugit ab cumque consequuntur pariatur provident? Nulla consequuntur nisi eum!";
  const defaultPrimaryCta: HeroCta = { label: "Get Started" };
  const defaultSecondaryCta: HeroCta = { label: "Get a Demo" };
  const defaultBottomTags: HeroLabel[] = [
    {
      text: "No-code editor",
      iconName: "sliders",
      iconPrefix: "fas",
    },
    {
      text: "Version history",
      iconName: "clock-rotate-left",
      iconPrefix: "fas",
    },
    {
      text: "PCI DSS L1 & GDPR-ready",
      iconName: "shield-halved",
      iconPrefix: "fas",
    },
  ];

  // Використовуємо передані значення або значення за замовчуванням
  const finalLabel = label || defaultLabel;
  const finalHeadingStart = headingStart || defaultHeadingStart;
  const finalHeadingMiddle = headingMiddle || defaultHeadingMiddle;
  const finalHeadingEnd = headingEnd || defaultHeadingEnd;
  const finalSubheading = subheading || defaultSubheading;
  const finalPrimaryCta = primaryCta || defaultPrimaryCta;
  const finalSecondaryCta = secondaryCta || defaultSecondaryCta;
  const finalBottomTags = bottomTags || defaultBottomTags;

  const labelIcon = getIcon(finalLabel.iconName, finalLabel.iconPrefix || "fas");

  return (
    <section className={cn("mb-32 pt-32", className)}>
      <div className="container">
        <div
          className="absolute inset-0 top-0 -z-10 mx-auto w-full"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundRepeat: "repeat",
            maskImage:
              "radial-gradient(ellipse 80% 100% at 50% 30%, #000 40%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 100% at 50% 30%, #000 40%, transparent 75%)",
          }}
        ></div>
        <div className="relative pb-16">
          <div className="absolute inset-x-0 top-0 -z-10 flex h-full w-full items-center justify-center opacity-100" />
          <div className="mb-4 flex justify-center">
            <LabelIcon
              icon={
                labelIcon && (
                  <FontAwesomeIcon
                    icon={labelIcon}
                    className="text-md"
                    style={{ color: "#F487F7" }}
                  />
                )
              }
            >
              {finalLabel.text}
            </LabelIcon>
          </div>
          <h1 className="mx-auto mb-8 max-w-6xl text-balance text-center font-bold text-4xl md:text-6xl">
           {finalHeadingStart}{" "}
           <FontAwesomeIcon icon={byPrefixAndName.fadr['microchip']} className="text-3xl md:text-5xl ml-1 mr-1" style={{color: "#FFAD56",}} /> 
           {finalHeadingMiddle}{" "}
           <FontAwesomeIcon icon={byPrefixAndName.fadr['diagram-subtask']} className="text-3xl md:text-5xl ml-2 mr-1" style={{color: "#55D8A4",}} /> 
           {finalHeadingEnd}
          </h1>
          <p className="text-zinc-700 mx-auto max-w-3xl text-center text-regular md:text-xl">
            {finalSubheading}
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button>
              {finalPrimaryCta.label}
              <FontAwesomeIcon icon={byPrefixAndName.far['arrow-right']} className="text-sm" />
            </Button>
            <Button variant="outline">
              {finalSecondaryCta.label}
            </Button>
          </div>
        </div>
          <div className="h-full w-full">
              <HeroAnimation />
          </div>
          <div className="mt-24 flex flex-wrap justify-center gap-4 md:gap-8" >
            
            {finalBottomTags.map((tag, index) => {
              const tagIcon = getIcon(tag.iconName, tag.iconPrefix || "fas");

              return (
                <LabelIcon
                  key={index}
                  icon={
                    tagIcon && (
                      <FontAwesomeIcon
                        icon={tagIcon}
                        className="text-md"
                        style={{ color: "var(--color-primary)" }}
                      />
                    )
                  }
                >
                  {tag.text}
                </LabelIcon>
              );
            })}
          </div>
      </div>
    </section>
  );
};

export { HeroBlock };

