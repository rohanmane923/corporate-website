const SectionHeader = ({ title, subtitle, actionLabel, actionTo }) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-corporate-navy mb-2">
          {title}
        </h2>
        <p className="text-lg text-gray-600">
          {subtitle}
        </p>
      </div>
      {actionLabel && actionTo && (
        <a
          href={actionTo}
          className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-corporate-orange transition"
        >
          {actionLabel} <span aria-hidden="true">→</span>
        </a>
      )}
    </div>
  );
};

export default SectionHeader;
