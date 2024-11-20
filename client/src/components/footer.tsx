import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ViewContainer } from "./ui/view-container";

const Footer = () => {
	return (
		<footer id="footer" className="mt-14">
			<ViewContainer className="flex md:justify-between items-center py-10 gap-5 justify-center border-t border-border flex-wrap">
				<p className="">&copy; 2024 Timeloom</p>
				<div className="flex gap-6 items-center">
					<Link
						className={cn(
							buttonVariants({ variant: "link", size: "link" }),
						)}
						href="https://github.com/inclinedadarsh/timeloom"
					>
						GitHub
					</Link>
					<Link
						className={cn(
							buttonVariants({ variant: "link", size: "link" }),
						)}
						href="https://x.com/inclinedadarsh"
					>
						Twitter
					</Link>
				</div>
			</ViewContainer>
		</footer>
	);
};

export default Footer;
