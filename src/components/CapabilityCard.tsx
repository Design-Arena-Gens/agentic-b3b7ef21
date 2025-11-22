interface CapabilityCardProps {
  title: string;
  description: string;
  examples: string[];
  accent?: "blue" | "gold" | "coral" | "persimmon";
}

const accentMap: Record<NonNullable<CapabilityCardProps["accent"]>, string> = {
  blue: "card blue",
  gold: "card gold",
  coral: "card coral",
  persimmon: "card persimmon"
};

export function CapabilityCard({
  title,
  description,
  examples,
  accent = "blue"
}: CapabilityCardProps) {
  return (
    <article className={accentMap[accent]}>
      <div className="card-label">Capability</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <ul className="card-list">
        {examples.map((example) => (
          <li key={example} className="card-list-item">
            <span className="card-bullet" aria-hidden />
            <span>{example}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
