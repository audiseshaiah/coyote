interface SectionWrapperProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  id?: string;
  className?: string;
  alt?: boolean;
}

export default function SectionWrapper({
  children,
  title,
  subtitle,
  id,
  className = "",
  alt = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 px-4 ${alt ? "bg-[var(--color-bg-alt)]" : "bg-white"} ${className}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="text-center mb-12">
            <h2
              id={id ? `${id}-heading` : undefined}
              className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)]"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-lg text-[var(--color-text-light)] max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
