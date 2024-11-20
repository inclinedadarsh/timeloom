import { toyMockup } from "@/assets";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { ViewContainer } from "./ui/view-container";

const Header = () => {
	return (
		<section id="header" className="mt-28">
			<ViewContainer className="">
				<div className="space-y-14">
					<h1 className="font-serif text-[40px] bg-gradient-to-br from-blue-50 to-blue-300 text-transparent bg-clip-text leading-tight sm:text-5xl md:text-6xl lg:text-7xl text-center font-semibold flex flex-col justify-center items-center gap-1 sm:gap-3">
						<span className="">Your Journey,</span>
						<span className="italic">Visualized.</span>
					</h1>
					<p className="text-center max-w-3xl mx-auto text-foreground/75 text-base md:text-lg">
						Transform your personal and project timelines into
						interactive, shareable stories. Timeloom helps you
						capture, organize, and showcase your path with
						simplicity and depth.
					</p>
					<div className="mx-auto sm:w-fit gap-4 md:gap-10 flex flex-col sm:flex-row">
						<Link
							href="#"
							className={cn(buttonVariants(), "w-full sm:w-auto")}
						>
							Join Waitlist
						</Link>
						<Link
							href="/adarsh"
							className={cn(
								buttonVariants({ variant: "outline" }),
								"w-full sm:w-auto",
							)}
						>
							Toy version
						</Link>
					</div>
				</div>
				<Link
					href="/adarsh"
					className="max-w-[760px] w-full mx-auto block relative group mt-20"
				>
					<Image
						src={toyMockup}
						alt="Timeloom Demo Image"
						className="rounded-xl w-full relative z-0"
					/>
					<div className="w-full h-full absolute top-0 left-0 bg-black/70 opacity-0 duration-300 z-10 group-hover:opacity-100 transition-opacity" />
					<p className="text-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100 duration-300 flex items-center gap-4">
						Checkout Toy Version <ArrowUpRight size={18} />
					</p>
					<div className="absolute top-1/2 w-[50%] h-[70%] bg-primary left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 blur-[130px] group-hover:scale-90 duration-300 transition-transform" />
				</Link>
			</ViewContainer>
		</section>
	);
};

export default Header;
