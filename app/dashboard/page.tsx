import Link from "next/link";
import { experiments } from "@/lib/experiments";

export default function DashboardPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Experiment Dashboard
      </h1>

      <div className="space-y-4">
        {experiments.map((experiment) => (
          <Link
            key={experiment.id}
            href={`/experiment/${experiment.id}`}
            className="block border p-4 rounded-lg hover:bg-gray-100"
          >
            <h2 className="text-xl font-semibold">
              {experiment.name}
            </h2>

            <p>Status: {experiment.status}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}