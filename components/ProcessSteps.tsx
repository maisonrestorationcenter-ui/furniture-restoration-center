type Step = { title: string; text: string };

/** Numbered process list (a true sequence), matching the Furniture Upholstery process styling. */
export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li key={step.title} className="border-t-2 border-gold pt-4">
          <span className="font-serif text-3xl text-gold" aria-hidden="true">{i + 1}</span>
          <h3 className="mt-1 font-serif text-2xl">{step.title}</h3>
          <p className="mt-2 text-ink/80">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
