import { cn } from "@/lib/utils";
import { ChevronsUp, MessagesSquare, UserPlus2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { ViewContainer } from "./ui/view-container";

const Contribution = () => {
	return (
		<section id="contribution" className="mt-20">
			<ViewContainer>
				<p className="text-secondary uppercase tracking-[2px] text-center text-sm">
					Build — Ship — Revaluate
				</p>
				<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-serif text-center mt-5">
					Open Source & Community
				</h2>
				<p className="text-center mt-8 max-w-2xl text-foreground/75 mx-auto">
					Open source & community is kept at the center of Timeloom.
					It isn't just a project, it's a collaborative journey.
					Here's how you can help shape Timeloom —
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-6">
					<Card>
						<CardHeader>
							<CardTitle>
								<div className="p-4 border border-border rounded-lg bg-white/[4%] w-fit">
									<MessagesSquare size={24} />
								</div>
								<h3 className="text-base md:text-lg mt-8">
									Shape Timeloom Together
								</h3>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								Open dialogue drives innovation. Join our GitHub
								Discussions to share ideas, provide feedback,
								and help us build a tool that truly serves
								creators.
							</p>
						</CardContent>
						<CardFooter>
							<Link
								href="https://github.com/inclinedadarsh/timeloom"
								className={cn(
									buttonVariants({ variant: "outline" }),
									"w-full",
								)}
							>
								Github Discussions
							</Link>
						</CardFooter>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>
								<div className="p-4 border border-border rounded-lg bg-white/[4%] w-fit">
									<ChevronsUp size={24} />
								</div>
								<h3 className="text-base md:text-lg mt-8">
									Help Us Improve
								</h3>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								Spotted a bug or have a feature suggestion?
								Every report, recommendation, and insight helps
								us refine the timeline-building experience.
							</p>
						</CardContent>
						<CardFooter>
							<Link
								href="https://github.com/inclinedadarsh/timeloom"
								className={cn(
									buttonVariants({ variant: "outline" }),
									"w-full",
								)}
							>
								Github Issues
							</Link>
						</CardFooter>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>
								<div className="p-4 border border-border rounded-lg bg-white/[4%] w-fit">
									<UserPlus2 size={24} />
								</div>
								<h3 className="text-base md:text-lg mt-8">
									Stay Connected
								</h3>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								Follow the journey on Twitter to get real-time
								updates, behind-the-scenes glimpses, and
								community highlights. Be part of Timeloom's
								growing narrative.
							</p>
						</CardContent>
						<CardFooter>
							<Link
								href="https://github.com/inclinedadarsh/timeloom"
								className={cn(
									buttonVariants({ variant: "outline" }),
									"w-full",
								)}
							>
								Twitter
							</Link>
						</CardFooter>
					</Card>
				</div>
			</ViewContainer>
		</section>
	);
};

export default Contribution;
