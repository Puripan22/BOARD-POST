export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative flex flex-col h-full">
      <div className="h-full w-full flex-grow">{children}</div>
    </section>
  );
}
