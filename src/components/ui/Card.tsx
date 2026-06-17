import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  href?: string;
  className?: string;
}

export default function Card({
  title,
  description,
  icon,
  href,
  className = "",
}: CardProps) {
  const content = (
    <div
      className={`bg-white border border-[var(--color-border)] rounded-xl p-6 hover:shadow-lg transition-shadow ${className}`}
    >
      {icon && (
        <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center mb-4 text-2xl">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
        {title}
      </h3>
      <p className="text-sm text-[var(--color-text-light)] leading-relaxed">
        {description}
      </p>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block group">
        {content}
      </Link>
    );
  }

  return content;
}
