import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FOOTER_CONTACT_INFO, SOCIALS } from "../constant/data";
import PropTypes from "prop-types";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import {
  buildEmailHref,
  normalizeWhatsAppNumber,
} from "../utils/common";
import PhoneLink from "./PhoneLink";

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const footerLinks = [
    {
      title: t("footer.websiteFeatures"),
      links: [
        {
          key: "featAbout",
          label: t("footer.featureAboutDemo"),
          sectionId: "about",
        },
        {
          key: "featSearch",
          label: t("footer.featureAdvancedSearch"),
          sectionId: "property-search",
        },
        { key: "featAdmin", label: t("footer.featureAdminPanel"), path: "/admin" },
        {
          key: "featLead",
          label: t("footer.featureLeadForm"),
          sectionId: "request-website",
        },
      ],
    },
    {
      title: t("footer.businessSolutions"),
      links: [
        {
          key: "solLang",
          label: t("footer.solutionMultilang"),
          sectionId: "about-multilingual",
        },
        {
          key: "solRes",
          label: t("footer.solutionReservation"),
          sectionId: "about-reservation",
        },
        {
          key: "solAi",
          label: t("footer.solutionAiSearch"),
          sectionId: "about-ai-search",
        },
        {
          key: "solMarket",
          label: t("footer.solutionMarketInsights"),
          sectionId: "about-market-insights",
        },
      ],
    },
  ];

  const scrollToSectionId = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSectionLink = (sectionId) => {
    if (location.pathname === "/") {
      scrollToSectionId(sectionId);
    } else {
      navigate("/");
      setTimeout(() => scrollToSectionId(sectionId), 150);
    }
  };

  const getIcon = (label) => {
    if (label.toLowerCase().includes("address"))
      return (
        <MdLocationOn className="text-[#06a84e] text-xl flex-shrink-0 mt-0.5" />
      );
    if (
      label.toLowerCase().includes("number") ||
      label.toLowerCase().includes("phone")
    )
      return <MdPhone className="text-[#06a84e] text-xl flex-shrink-0" />;
    if (label.toLowerCase().includes("email"))
      return <MdEmail className="text-[#06a84e] text-xl flex-shrink-0" />;
    return null;
  };

  const whatsappHref = `https://wa.me/${normalizeWhatsAppNumber(
    FOOTER_CONTACT_INFO.links.find(
      (link) =>
        link.label.toLowerCase().includes("number") ||
        link.label.toLowerCase().includes("phone")
    )?.value
  )}`;

  return (
    <footer className="max-padd-container mb-4 overflow-x-hidden">
      <div className="bg-[#1e2a38] rounded-tr-3xl rounded-tl-3xl pt-10 sm:pt-14 xl:pt-16 pb-10 px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-10">
          <div className="max-w-lg">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {t("footer.exploreTitle")}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {t("footer.exploreDescription")}
            </p>
          </div>

          <div className="flex items-start gap-4">
            {SOCIALS.links.map((link) =>
              link.url ? (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#06a84e] transition-colors"
                >
                  {link.icon}
                </a>
              ) : link.noLink ? (
                <span
                  key={link.id}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white cursor-default"
                  aria-hidden
                >
                  {link.icon}
                </span>
              ) : (
                <Link
                  to="/"
                  key={link.id}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#06a84e] transition-colors"
                >
                  {link.icon}
                </Link>
              )
            )}
          </div>
        </div>

        <hr className="border-white/10 mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("footer.aboutDemoTitle")}
            </h4>
            <p className="text-white/50 text-sm leading-relaxed">
              {t("footer.aboutDemoBody")}
            </p>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold mb-5">{col.title}</h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.key}>
                    {link.path ? (
                      <Link
                        to={link.path}
                        className="text-white/50 text-sm hover:text-[#06a84e] transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : link.sectionId ? (
                      <button
                        type="button"
                        onClick={() => handleSectionLink(link.sectionId)}
                        className="text-left text-white/50 text-sm hover:text-[#06a84e] transition-colors cursor-pointer"
                      >
                        {link.label}
                      </button>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white font-semibold mb-5">
              {t("footer.requestSimilarWebsite")}
            </h4>
            <ul className="flex flex-col gap-4">
              {FOOTER_CONTACT_INFO.links
                .filter(
                  (link) =>
                    link.label.toLowerCase().includes("number") ||
                    link.label.toLowerCase().includes("phone") ||
                    link.label.toLowerCase().includes("email")
                )
                .map((link, index) => {
                  const isPhone =
                    link.label.toLowerCase().includes("number") ||
                    link.label.toLowerCase().includes("phone");

                  const content = (
                    <>
                      {getIcon(link.label)}
                      <div>
                        <p className="text-white/40 text-xs mb-1">
                          {isPhone
                            ? t("contact.phone")
                            : t("contact.emailAddress")}
                        </p>
                        <p className="text-white text-sm">{link.value}</p>
                      </div>
                    </>
                  );

                  return (
                    <li key={index}>
                      <div className="flex flex-col gap-4">
                        {isPhone ? (
                          <PhoneLink
                            phone={link.value}
                            className="flex gap-3 items-start transition-colors hover:text-[#06a84e]"
                          >
                            {content}
                          </PhoneLink>
                        ) : (() => {
                          const emailHref = buildEmailHref(link.value);
                          return emailHref ? (
                            <a
                              href={emailHref}
                              target="_blank"
                              rel="noreferrer"
                              className="flex gap-3 items-start transition-colors hover:text-[#06a84e]"
                            >
                              {content}
                            </a>
                          ) : (
                            <div className="flex gap-3 items-start">{content}</div>
                          );
                        })()}

                        {isPhone && (
                          <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noreferrer"
                            className="flex gap-3 items-start transition-colors hover:text-[#06a84e]"
                          >
                            <FaWhatsapp className="text-[#06a84e] text-xl flex-shrink-0" />
                            <div>
                              <p className="text-white/40 text-xs mb-1">
                                {t("contact.whatsapp")}
                              </p>
                              <p className="text-white text-sm">{link.value}</p>
                            </div>
                          </a>
                        )}
                      </div>
                    </li>
                  );
                })}
            </ul>
            {location.pathname === "/" ? (
              <a
                href="#request-website"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-[#06a84e] hover:bg-[#06a84e]/20 hover:text-white"
              >
                {t("footer.requestWebsiteQuote")}
              </a>
            ) : (
              <button
                type="button"
                onClick={() => handleSectionLink("request-website")}
                className="mt-6 inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-[#06a84e] hover:bg-[#06a84e]/20 hover:text-white cursor-pointer"
              >
                {t("footer.requestWebsiteQuote")}
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="bg-[#151f2b] py-4 px-6 sm:px-10 rounded-b-3xl flex flex-col sm:flex-row justify-between items-center gap-2">
        <span className="text-white/50 text-sm">{t("footer.copyright")}</span>
      </div>
    </footer>
  );
};

export default Footer;

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-semibold text-white whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

FooterColumn.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
