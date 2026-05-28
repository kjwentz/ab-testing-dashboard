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
        <nav className="border-b p-4 flex font-medium">
          <Link href="/" style={{ marginRight: "3rem" }}>Home</Link>
          <Link href="/experiments" style={{ marginRight: "3rem" }}>Experiments</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>

        {/* PAGE CONTENT */}
        <main>{children}</main>
      </body>
    </html>
  );
}