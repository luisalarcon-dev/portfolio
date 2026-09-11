type Props = {
  number: string;
  label: string;
  title: string;
  description?: string;
};
export function SectionHeading({ number, label, title, description }: Props) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow text-cyan">
          {number} / {label}
        </p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-intro">{description}</p>}
    </div>
  );
}
export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
