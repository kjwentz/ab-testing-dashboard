import { experiments } from "@/lib/experiments";

export default async function ExperimentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const experiment = experiments.find(
    (exp) => exp.id === id
  );

  if (!experiment) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold">
          Experiment not found
        </h1>
      </main>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        {experiment.name}
      </h1>

      <div className="space-y-4">
        {experiment.variants.map((variant) => (
          <div
            key={variant.id}
            className="border p-4 rounded-lg"
          >
            <h2 className="text-xl font-semibold">
              Variant {variant.id}
            </h2>

            <p>Name: {variant.name}</p>

            <p>
              Conversion Rate: {variant.conversionRate}%
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}