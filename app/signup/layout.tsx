export default function SignUpLayout({
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
