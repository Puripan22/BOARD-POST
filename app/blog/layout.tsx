export default function YourPostsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="relative flex flex-col h-full"> 
			<div className="h-full w-full flex-grow">
				{children}
			</div>
		</section>
	);
}
// flex flex-col items-center justify-center gap-4 py-8 md:py-10
// inline-block max-w-lg text-center justify-center