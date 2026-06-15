/* eslint-disable react-refresh/only-export-components */
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold uppercase tracking-wide border-2 border-foreground transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 shadow-[3px_3px_0_var(--color-pop-ink)] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0_var(--color-pop-ink)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_var(--color-pop-ink)]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        destructive: "bg-destructive text-white",
        outline: "bg-secondary text-secondary-foreground",
        secondary: "bg-card text-foreground",
        ghost:
          "border-transparent shadow-none hover:translate-x-0 hover:translate-y-0 hover:bg-accent hover:shadow-none active:translate-x-0 active:translate-y-0",
        link: "border-transparent shadow-none text-primary normal-case tracking-normal underline-offset-4 hover:translate-x-0 hover:translate-y-0 hover:shadow-none hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2 has-[>svg]:px-4",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
