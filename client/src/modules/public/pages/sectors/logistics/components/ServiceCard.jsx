import { Link } from "react-router-dom";

const ServiceCard = ({ icon: Icon, title, description, to }) => {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100 text-orange-500 mb-6">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-corporate-navy mb-3">{title}</h3>
      <p className="text-gray-500 leading-relaxed mb-6">{description}</p>
      <Link to={to} className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-corporate-orange transition">
        View Details <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
};

export default ServiceCard;
