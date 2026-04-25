import { Link } from "react-router-dom";

const SectionHeader = ({ title, subtitle, actionLabel, actionTo }) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-orange-500 font-semibold uppercase tracking-[0.35em] mb-2">{title}</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-corporate-navy max-w-2xl">{subtitle}</h2>
      </div>
      {actionLabel && actionTo && (
        <Link
          to={actionTo}
          className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-corporate-orange transition"
        >
          {actionLabel}
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
