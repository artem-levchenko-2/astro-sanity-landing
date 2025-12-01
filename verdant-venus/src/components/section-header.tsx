import * as React from "react";

import { cn } from "@/lib/utils";
import { LabelIcon } from "./ui/label-icon";

type SectionHeaderProps = {
  icon?: React.ReactNode;
  /**
   * Маленький лейбл над заголовком (наприклад, "Actions").
   */
  label?: React.ReactNode;
  /**
   * Основний заголовок секції. Може містити розриви рядків.
   */
  title: React.ReactNode;
  /**
   * Опис під заголовком.
   */
  description?: React.ReactNode;
  /**
   * Додаткові класи для кореневого контейнера.
   */
  className?: string;
  /**
   * Додаткові класи для опису.
   */
  descriptionClassName?: string;
  /**
   * Тема оформлення заголовка.
   * "dark" — світлий текст на темному фоні,
   * "light" — темний текст на світлому фоні.
   */
  theme?: "light" | "dark";
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon,
  label,
  title,
  description,
  className,
  descriptionClassName,
  theme = "light",
}) => {
  const isDark = theme === "dark";

  return (
    <div className={cn("relative pb-24", className)}>
      <div className="absolute inset-x-0 top-0 -z-10 flex h-full w-full items-center justify-center opacity-100" />

      {label && (
        <div
          className={cn(
            "mb-4 flex justify-center",
            isDark ? "text-zinc-300" : "text-zinc-700"
          )}
        >
          <LabelIcon icon={icon}>{label}</LabelIcon>
        </div>
      )}

      <h1
        className={cn(
          "mb-6 text-center font-semibold",
          // Менший заголовок на мобільних, більший на десктопі
          "text-4xl md:text-5xl",
          isDark ? "text-primary-foreground" : "text-zinc-900"
        )}
      >
        {title}
      </h1>

      {description && (
        <p
          className={cn(
            "mx-auto max-w-3xl text-center font-normal md:text-lg",
            isDark ? "text-zinc-500" : "text-zinc-600",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export { SectionHeader };


