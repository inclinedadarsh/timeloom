import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold font-sans transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground shadow hover:bg-blue-800 border border-white/5 hover:border-white/20 transition-colors",
				destructive:
					"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
				outline:
					"border border-border bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 border border-white/5 hover:border-white/20 transition-colors",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-foreground/85 font-medium before:w-full before:h-full before:absolute relative before:top-0 before:left-0 before:bg-secondary/40 z-0 before:-z-10 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200 before:ease-in-out before:origin-right before:hover:origin-left hover:text-white",
			},
			size: {
				default: "h-14 px-6 py-3",
				sm: "h-8 rounded-md px-3 text-xs",
				lg: "h-15 rounded-md px-9",
				icon: "h-12 w-12",
				link: "p-0 rounded-none",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
