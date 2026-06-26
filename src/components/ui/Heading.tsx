import { ReactNode } from "react";

interface Props {
  title: ReactNode;
  subtitle?: ReactNode;
}

export default function Heading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="max-w-3xl">
      {subtitle && (
        <p className="mb-4 uppercase tracking-[0.25em] text-cyan-400">
          {subtitle}
        </p>
      )}

      <h2
        className="font-black text-5xl leading-tight md:text-6xl"
        style={{ fontFamily: "var(--font-space)" }}
      >
        {title}
      </h2>
    </div>
  );
}