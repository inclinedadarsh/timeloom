import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ViewContainer } from "./ui/view-container";

const Nav = () => {
	return (
		<nav id="nav" className="my-6">
			<ViewContainer className="flex justify-between items-center">
				<Link
					href="/"
					className="font-serif font-bold text-xl md:text-2xl"
				>
					Timeloom
				</Link>
				<ul className="list-none flex grow gap-8 justify-center items-center">
					<li>
						<Link
							className={cn(
								buttonVariants({
									variant: "link",
									size: "link",
								}),
							)}
							href="#"
						>
							Contribute
						</Link>
					</li>
					<li>
						<Link
							className={cn(
								buttonVariants({
									variant: "link",
									size: "link",
								}),
							)}
							href="#"
						>
							Check Username
						</Link>
					</li>
					<li>
						<Link
							className={cn(
								buttonVariants({
									variant: "link",
									size: "link",
								}),
							)}
							href="#"
						>
							Waitlist
						</Link>
					</li>
				</ul>
				<div className="">
					<Link
						href="#"
						className={cn(
							buttonVariants({ variant: "outline" }),
							"",
						)}
					>
						Star on GitHub
					</Link>
				</div>
			</ViewContainer>
		</nav>
	);
};

export default Nav;
