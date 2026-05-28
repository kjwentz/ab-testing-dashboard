import Link from "next/link";

export const metadata = {
  title: "Experimentation Dashboard",
  description: "A/B testing system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* NAV BAR */}
        <nav className="border-b p-4 flex gap-6 font-medium">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>

        {/* PAGE CONTENT */}
        <main>{children}</main>
      </body>
    </html>
  );
}