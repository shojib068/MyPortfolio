// Every section is a frosted panel inside the page container, like the reference.
export default function Section({ id, children, className = '' }) {
  return (
    <section id={id} className="relative py-3">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className={`panel ${className}`}>{children}</div>
      </div>
    </section>
  );
}
