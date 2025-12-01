import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonPrimaryVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default: "relative",
      },
      size: {
        default: "h-10 px-6 py-2.5",
        sm: "h-9 px-4 py-2",
        lg: "h-12 px-8 py-3",
        icon: "size-11",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function ButtonPrimary({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonPrimaryVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button-primary"
      className={cn(
        buttonPrimaryVariants({ variant, size }),
        "relative rounded-lg group",
        className
      )}
      style={{
        // DEFAULT/HOVER/PRESSED: Зовнішній шар завжди #060ECD
        backgroundColor: "#060ECD",
        borderRadius: "10px",
      }}
      {...props}
    >
      {/* DEFAULT СТАН: Перший внутрішній шар з градієнтом */}
      <div
        className="absolute inset-[1px] rounded-[7px] transition-all duration-200"
        style={{
          // DEFAULT: linear-gradient(rgb(87, 104, 255) 0%, rgb(31, 54, 255) 100%)
          // HOVER: залишається таким самим
          // PRESSED: linear-gradient(rgb(22, 40, 195) 0%, rgb(31, 54, 255) 100%)
          background: "linear-gradient(rgb(87, 104, 255) 0%, rgb(31, 54, 255) 100%)",
          borderRadius: "9px",
          boxShadow: "rgba(42, 49, 81, 0.26) 0px 1px 2px 0px",
        }}
      />
      
      {/* PRESSED СТАН: Перший внутрішній шар - темніший градієнт */}
      <div
        className="absolute inset-[1px] rounded-[7px] opacity-0 group-active:opacity-100 transition-opacity duration-150"
        style={{
          // PRESSED: linear-gradient(rgb(22, 40, 195) 0%, rgb(31, 54, 255) 100%)
          background: "linear-gradient(rgb(22, 40, 195) 0%, rgb(31, 54, 255) 100%)",
          borderRadius: "9px",
          boxShadow: "rgba(42, 49, 81, 0.26) 0px 1px 2px 0px",
        }}
      />
      
      {/* DEFAULT СТАН: Другий внутрішній шар з градієнтом */}
      <div
        className="absolute inset-[2px] rounded-[6px] transition-all duration-200"
        style={{
          // DEFAULT: linear-gradient(rgb(57, 77, 255) 0%, rgb(31, 53, 255) 100%)
          background: "linear-gradient(rgb(57, 77, 255) 0%, rgb(31, 53, 255) 100%)",
          borderRadius: "8px",
        }}
      />
      
      {/* HOVER СТАН: Другий внутрішній шар - однотонний колір */}
      <div
        className="absolute inset-[2px] rounded-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{
          // HOVER: linear-gradient(rgb(31, 53, 255) 0%, rgb(31, 53, 255) 100%) - однотонний
          background: "linear-gradient(rgb(31, 53, 255) 0%, rgb(31, 53, 255) 100%)",
          borderRadius: "8px",
        }}
      />
      
      {/* PRESSED СТАН: Другий внутрішній шар - темніший градієнт */}
      <div
        className="absolute inset-[2px] rounded-[6px] opacity-0 group-active:opacity-100 transition-opacity duration-150"
        style={{
          // PRESSED: linear-gradient(rgb(23, 40, 194) 0%, rgb(25, 45, 227) 100%)
          background: "linear-gradient(rgb(23, 40, 194) 0%, rgb(25, 45, 227) 100%)",
          borderRadius: "8px",
        }}
      />
      
      {/* Контент кнопки */}
      <div className="relative z-10 flex items-center justify-center gap-2 text-white">
        {children}
      </div>
    </Comp>
  )
}

export { ButtonPrimary, buttonPrimaryVariants }

