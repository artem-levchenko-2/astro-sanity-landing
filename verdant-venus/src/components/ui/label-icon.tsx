"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import { Star } from "@/lib/fontawesome-icons";
import { cn } from "@/lib/utils";

export const title = "Label with Icon";

type LabelIconProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "before" | "after";
  className?: string;
};

const LabelIcon = ({ children, icon, iconPosition = "before", className }: LabelIconProps) => {
  const iconElement = icon || <Star className="size-4" />;
  
  return (
    <Label className={cn(className)}>
      {iconPosition === "before" ? iconElement : null}
      {children}
      {iconPosition === "after" ? iconElement : null}
    </Label>
  );
};

const Example = () => (
  <LabelIcon>
    API Key
  </LabelIcon>
);

export { LabelIcon };
export default Example;
