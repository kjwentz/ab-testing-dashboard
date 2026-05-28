import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        A/B Testing Dashboard
      </h1>

      <p className="mt-4">
        Welcome. This is a simple experimentation system.
      </p>

      <Link
        className="text-blue-600 underline mt-4 inline-block"
        href="/dashboard"
      >
        Go to Dashboard →
      </Link>
    </main>
  );
}