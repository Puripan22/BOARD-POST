import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import ScrollToTopButton  from "@/components/ScrollToTopButton"
import StarsCanvas from "@/components/StarBackground";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" }, 
	],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>

			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased ",
					fontSans.variable
				)}
				
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen ">
						<Navbar />
						<main className=" pl-2 pr-2 pt-2  pb-2 flex-grow ">
							{children}
						</main>
						<ScrollToTopButton/>
					</div>
				</Providers>
			</body>
		</html>
	);
}
