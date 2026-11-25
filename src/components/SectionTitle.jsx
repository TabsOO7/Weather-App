export default function SectionTitle({ title, subtitle, action }) {
  return (
    <div className="section-heading">
      <div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>
      {action && <span className="section-action">{action}</span>}
    </div>
  );
}
