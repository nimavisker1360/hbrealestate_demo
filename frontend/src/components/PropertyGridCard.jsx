import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { MdLocationOn, MdChevronRight } from "react-icons/md";
import { useContext } from "react";
import CurrencyContext from "../context/CurrencyContext";
import { getOptimizedImageUrl } from "../utils/media";
import { resolveProjectPath, resolvePropertyPath } from "../utils/seo";

// Get category display name (bilingual)
const getCategoryLabel = (category, propertyType, lang = "tr") => {
  const labels = {
    tr: {
      "local-project": "Yurt İçi Proje",
      "international-project": "Yurt Dışı Proje",
      residential: "Konut",
      commercial: "Ticari",
      land: "Arsa",
      building: "Bina",
      villa: "Villa",
      "tourist-facility": "Turistik Tesis",
      timeshare: "Devre Mülk",
      default: "Satılık",
    },
    en: {
      "local-project": "Local Project",
      "international-project": "International Project",
      residential: "Residential",
      commercial: "Commercial",
      land: "Land",
      building: "Building",
      villa: "Villa",
      "tourist-facility": "Tourist Facility",
      timeshare: "Timeshare",
      default: "For Sale",
    },
  };

  const currentLabels = labels[lang] || labels.tr;

  if (propertyType === "local-project" || propertyType === "international-project") {
    return currentLabels[propertyType];
  }

  return currentLabels[category] || category || currentLabels.default;
};

const PropertyGridCard = ({ property }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { selectedCurrency, baseCurrency, rates, convertAmount, formatMoney } =
    useContext(CurrencyContext);
  const sourceCurrency = property.currency || baseCurrency;
  const displayCurrency =
    selectedCurrency && (selectedCurrency === baseCurrency || rates?.[selectedCurrency])
      ? selectedCurrency
      : baseCurrency;
  const convertedPrice = convertAmount(property.price, sourceCurrency, displayCurrency);
  const formattedPrice = formatMoney(
    convertedPrice,
    displayCurrency,
    i18n.language === "tr" ? "tr-TR" : "en-US"
  );
  const propertyRoute =
    property?.propertyType === "local-project" ||
    property?.propertyType === "international-project"
      ? resolveProjectPath(property)
      : resolvePropertyPath(property);

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => navigate(propertyRoute)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          navigate(propertyRoute);
        }
      }}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_20px_40px_-14px_rgba(15,23,42,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[5/3] w-full overflow-hidden bg-slate-100">
        <img
          src={getOptimizedImageUrl(property.image, { width: 720, height: 432 })}
          alt={property.title || ""}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent opacity-60" />
        <div className="property-price-pill absolute left-3 top-3 max-w-[calc(100%-1.5rem)]">
          {formattedPrice}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 pt-3.5">
        <div className="min-h-[2.75rem]">
          <h3 className="line-clamp-2 text-[0.9375rem] font-semibold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-emerald-700">
            {property.title}
          </h3>
        </div>

        <div className="flex min-h-[2.25rem] items-start gap-1.5 text-xs text-slate-500">
          <MdLocationOn className="mt-0.5 flex-shrink-0 text-emerald-600" size={15} aria-hidden />
          <p className="line-clamp-2 leading-relaxed">
            {[property.city, property.country].filter(Boolean).join(", ")}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
          <span className="inline-flex max-w-[65%] items-center truncate rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-800">
            <span className="truncate">
              {getCategoryLabel(property.category, property.propertyType, i18n.language)}
            </span>
          </span>
          <span className="flex flex-shrink-0 items-center gap-0.5 text-xs font-medium text-emerald-600 opacity-90 transition group-hover:opacity-100">
            <span className="hidden sm:inline">{t("properties.viewListing")}</span>
            <MdChevronRight className="text-lg transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
          </span>
        </div>
      </div>
    </article>
  );
};

PropertyGridCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string,
    propertyType: PropTypes.string,
    category: PropTypes.string,
    facilities: PropTypes.shape({
      bedrooms: PropTypes.number,
      bathrooms: PropTypes.number,
      parkings: PropTypes.number,
    }),
  }).isRequired,
};

export default PropertyGridCard;
