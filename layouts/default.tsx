import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			<Navbar />
			<main className="container flex-grow px-6 mx-auto max-w-7xl">
				{children}
			</main>
			<footer className="flex items-center justify-center w-full py-3">
				<Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="https://www.linkedin.com/in/codewithashim/"
					title="nextui.org homepage"
				>
					<p className="text-primary">Codewithashim {"</>"}</p>
				</Link>
			</footer>
		</div>
	);
}
