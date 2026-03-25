import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { sendEmail } from "../utils/api";

const REQUEST_COPY = {
  en: {
    eyebrow: "Website Project Request",
    title: "Request a Similar Website",
    subtitle:
      "Tell us about your business and the kind of website you need. We'll get back to you with the best solution.",
    trustText:
      "Ideal for real estate agencies, consultants, developers, and other businesses.",
    responseNote: "We usually respond within 24 hours.",
    formTitle: "Project Brief",
    formSubtitle:
      "Share your requirements and we'll prepare the right direction for your website project.",
    button: "Send Request",
    sending: "Sending...",
    emailSubject: "Website Design Request",
    validationRequired: "Please complete all fields before sending your request.",
    validationEmail: "Please enter a valid email address.",
    success:
      "Your website request was sent successfully. We'll contact you soon.",
    error: "Your request could not be sent. Please try again.",
    proofCards: [
      {
        title: "Lead-Focused Structure",
        description:
          "Designed to turn visitors into serious inquiries with clear conversion paths.",
      },
      {
        title: "Premium Presentation",
        description:
          "Built for polished project showcases, trust-building, and strong first impressions.",
      },
      {
        title: "Responsive by Default",
        description:
          "Optimized for desktop, tablet, and mobile browsing from the start.",
      },
    ],
    labels: {
      fullName: "Full Name",
      whatsapp: "WhatsApp Number",
      email: "Email Address",
      businessType: "Business Type",
      websiteType: "Website Type Needed",
      budgetRange: "Budget Range",
      projectDetails: "Project Details",
    },
    placeholders: {
      fullName: "Your full name",
      whatsapp: "e.g. +90 555 123 45 67",
      email: "name@company.com",
      businessType: "Select your business type",
      websiteType: "Select the website you need",
      budgetRange: "Select your budget range",
      projectDetails:
        "Tell us about your business, goals, pages, features, and any references you have in mind.",
    },
    options: {
      businessType: [
        "Real Estate Agency",
        "Real Estate Consultant",
        "Property Developer",
        "Construction Company",
        "Other Business",
      ],
      websiteType: [
        "Corporate Website",
        "Real Estate Listing Website",
        "Project Showcase Website",
        "Landing Page",
        "Custom Solution",
      ],
      budgetRange: [
        "Under $2,000",
        "$2,000 - $5,000",
        "$5,000 - $10,000",
        "$10,000+",
        "Not Sure Yet",
      ],
    },
  },
  tr: {
    eyebrow: "Web Sitesi Proje Talebi",
    title: "Benzer Bir Web Sitesi Talep Edin",
    subtitle:
      "Isletmeniz ve ihtiyaciniz olan web sitesi hakkinda bize bilgi verin. Size en uygun cozumle geri donelim.",
    trustText:
      "Emlak ofisleri, danismanlar, gelistiriciler ve diger isletmeler icin idealdir.",
    responseNote: "Genellikle 24 saat icinde donus yapiyoruz.",
    formTitle: "Proje Brifi",
    formSubtitle:
      "Ihtiyacinizi paylasin, web sitesi projeniz icin en dogru yonu hazirlayalim.",
    button: "Talep Gonder",
    sending: "Gonderiliyor...",
    emailSubject: "Web Sitesi Tasarim Talebi",
    validationRequired:
      "Lutfen talebinizi gondermeden once tum alanlari doldurun.",
    validationEmail: "Lutfen gecerli bir e-posta adresi girin.",
    success:
      "Web sitesi talebiniz basariyla gonderildi. Kisa sure icinde sizinle iletisime gececegiz.",
    error: "Talebiniz gonderilemedi. Lutfen tekrar deneyin.",
    proofCards: [
      {
        title: "Lead Odakli Yapi",
        description:
          "Ziyaretcileri net donusum adimlariyla ciddi musteri taleplerine donusturmek icin tasarlandi.",
      },
      {
        title: "Premium Sunum",
        description:
          "Projeleri guclu gostermek, guven vermek ve profesyonel ilk izlenim olusturmak icin hazirlandi.",
      },
      {
        title: "Responsive Tasarim",
        description:
          "Masaustu, tablet ve mobil deneyim icin basindan itibaren optimize edildi.",
      },
    ],
    labels: {
      fullName: "Ad Soyad",
      whatsapp: "WhatsApp Numarasi",
      email: "E-posta Adresi",
      businessType: "Isletme Turu",
      websiteType: "Ihtiyac Duyulan Web Sitesi",
      budgetRange: "Butce Araligi",
      projectDetails: "Proje Detaylari",
    },
    placeholders: {
      fullName: "Adiniz ve soyadiniz",
      whatsapp: "Orn. +90 555 123 45 67",
      email: "isim@sirket.com",
      businessType: "Isletme turunuzu secin",
      websiteType: "Ihtiyaciniz olan siteyi secin",
      budgetRange: "Butce araliginizi secin",
      projectDetails:
        "Isletmenizi, hedeflerinizi, sayfalari, ozellikleri ve varsa begendiginiz ornekleri yazin.",
    },
    options: {
      businessType: [
        "Emlak Ofisi",
        "Gayrimenkul Danismani",
        "Proje Gelistirici",
        "Insaat Sirketi",
        "Diger Isletme",
      ],
      websiteType: [
        "Kurumsal Web Sitesi",
        "Emlak Listeleme Sitesi",
        "Proje Tanitim Sitesi",
        "Landing Page",
        "Ozel Cozum",
      ],
      budgetRange: [
        "$2.000 Alti",
        "$2.000 - $5.000",
        "$5.000 - $10.000",
        "$10.000+",
        "Henuz Net Degil",
      ],
    },
  },
  ru: {
    eyebrow: "Запрос на проект сайта",
    title: "Запросить похожий сайт",
    subtitle:
      "Расскажите о вашем бизнесе и о том, какой сайт вам нужен. Мы вернемся к вам с лучшим решением.",
    trustText:
      "Идеально подходит для агентств недвижимости, консультантов, девелоперов и других компаний.",
    responseNote: "Обычно мы отвечаем в течение 24 часов.",
    formTitle: "Бриф проекта",
    formSubtitle:
      "Опишите ваши задачи, и мы предложим правильное направление для вашего сайта.",
    button: "Отправить запрос",
    sending: "Отправка...",
    emailSubject: "Запрос на разработку сайта",
    validationRequired:
      "Пожалуйста, заполните все поля перед отправкой запроса.",
    validationEmail: "Пожалуйста, укажите корректный email.",
    success:
      "Ваш запрос на сайт успешно отправлен. Мы свяжемся с вами в ближайшее время.",
    error: "Не удалось отправить запрос. Пожалуйста, попробуйте еще раз.",
    proofCards: [
      {
        title: "Структура для лидов",
        description:
          "Продумана так, чтобы превращать посетителей в реальные обращения с понятными шагами конверсии.",
      },
      {
        title: "Премиальная подача",
        description:
          "Подходит для сильной презентации проектов, укрепления доверия и профессионального первого впечатления.",
      },
      {
        title: "Адаптивный дизайн",
        description:
          "Изначально оптимизирован для десктопа, планшета и мобильных устройств.",
      },
    ],
    labels: {
      fullName: "Полное имя",
      whatsapp: "Номер WhatsApp",
      email: "Email адрес",
      businessType: "Тип бизнеса",
      websiteType: "Какой сайт нужен",
      budgetRange: "Бюджет",
      projectDetails: "Детали проекта",
    },
    placeholders: {
      fullName: "Ваше полное имя",
      whatsapp: "Например: +90 555 123 45 67",
      email: "name@company.com",
      businessType: "Выберите тип бизнеса",
      websiteType: "Выберите нужный тип сайта",
      budgetRange: "Выберите бюджет",
      projectDetails:
        "Опишите ваш бизнес, цели, страницы, функции и примеры, которые вам нравятся.",
    },
    options: {
      businessType: [
        "Агентство недвижимости",
        "Консультант по недвижимости",
        "Девелопер",
        "Строительная компания",
        "Другой бизнес",
      ],
      websiteType: [
        "Корпоративный сайт",
        "Сайт с листингом недвижимости",
        "Сайт-презентация проектов",
        "Лендинг",
        "Индивидуальное решение",
      ],
      budgetRange: [
        "До $2,000",
        "$2,000 - $5,000",
        "$5,000 - $10,000",
        "$10,000+",
        "Пока не определился",
      ],
    },
  },
};

const initialFormState = {
  fullName: "",
  whatsappNumber: "",
  emailAddress: "",
  businessType: "",
  websiteTypeNeeded: "",
  budgetRange: "",
  projectDetails: "",
};

const WebsiteRequestSection = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.toLowerCase().startsWith("tr")
    ? "tr"
    : i18n.language?.toLowerCase().startsWith("ru")
      ? "ru"
      : "en";
  const copy = REQUEST_COPY[currentLang];
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputClassName =
    "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100";

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requiredFields = [
      formData.fullName.trim(),
      formData.whatsappNumber.trim(),
      formData.emailAddress.trim(),
      formData.businessType.trim(),
      formData.websiteTypeNeeded.trim(),
      formData.budgetRange.trim(),
      formData.projectDetails.trim(),
    ];

    if (requiredFields.some((value) => !value)) {
      toast.error(copy.validationRequired);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.emailAddress.trim())) {
      toast.error(copy.validationEmail);
      return;
    }

    setIsSubmitting(true);

    try {
      await sendEmail({
        name: formData.fullName.trim(),
        email: formData.emailAddress.trim(),
        phone: formData.whatsappNumber.trim(),
        subject: `${copy.emailSubject}: ${formData.websiteTypeNeeded.trim()}`,
        leadSource: "website_design_request",
        message: [
          copy.title,
          "",
          `${copy.labels.fullName}: ${formData.fullName.trim()}`,
          `${copy.labels.whatsapp}: ${formData.whatsappNumber.trim()}`,
          `${copy.labels.email}: ${formData.emailAddress.trim()}`,
          `${copy.labels.businessType}: ${formData.businessType.trim()}`,
          `${copy.labels.websiteType}: ${formData.websiteTypeNeeded.trim()}`,
          `${copy.labels.budgetRange}: ${formData.budgetRange.trim()}`,
          "",
          `${copy.labels.projectDetails}:`,
          formData.projectDetails.trim(),
        ].join("\n"),
      });

      toast.success(copy.success);
      setFormData(initialFormState);
    } catch (error) {
      toast.error(copy.error);
      console.error("Error sending website request:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="request-website"
      className="max-padd-container py-16 xl:py-20"
      style={{ scrollMarginTop: "calc(var(--header-height) + 24px)" }}
    >
      <div className="overflow-hidden rounded-[32px] border border-slate-200/70 bg-[linear-gradient(135deg,#f8fafc_0%,#eef6f2_100%)] shadow-[0_32px_90px_-48px_rgba(15,23,42,0.42)]">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_42%),linear-gradient(160deg,#0f172a_0%,#132238_52%,#1e293b_100%)] px-6 py-10 text-white sm:px-8 lg:px-10 xl:px-12">
            <div className="absolute -right-16 top-10 h-44 w-44 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="absolute -bottom-16 left-10 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl" />

            <div className="relative">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                {copy.eyebrow}
              </span>
              <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
                {copy.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
                {copy.subtitle}
              </p>
              <p className="mt-6 max-w-lg rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-slate-200">
                {copy.trustText}
              </p>

              <div className="mt-8 grid gap-4">
                {copy.proofCards.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-200">
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-4 w-4"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 5.29a1 1 0 010 1.415l-7.5 7.5a1 1 0 01-1.415 0l-3.5-3.5a1 1 0 011.414-1.414l2.793 2.793 6.793-6.793a1 1 0 011.415 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-slate-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/95 px-6 py-8 sm:px-8 lg:px-10 xl:px-12">
            <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] sm:p-8">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {copy.formTitle}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  {copy.formSubtitle}
                </p>
              </div>

              <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="website-request-full-name"
                      className="text-sm font-medium text-slate-700"
                    >
                      {copy.labels.fullName}
                    </label>
                    <input
                      id="website-request-full-name"
                      type="text"
                      autoComplete="name"
                      className={inputClassName}
                      placeholder={copy.placeholders.fullName}
                      value={formData.fullName}
                      onChange={handleChange("fullName")}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="website-request-whatsapp"
                      className="text-sm font-medium text-slate-700"
                    >
                      {copy.labels.whatsapp}
                    </label>
                    <input
                      id="website-request-whatsapp"
                      type="tel"
                      autoComplete="tel"
                      className={inputClassName}
                      placeholder={copy.placeholders.whatsapp}
                      value={formData.whatsappNumber}
                      onChange={handleChange("whatsappNumber")}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="website-request-email"
                      className="text-sm font-medium text-slate-700"
                    >
                      {copy.labels.email}
                    </label>
                    <input
                      id="website-request-email"
                      type="email"
                      autoComplete="email"
                      className={inputClassName}
                      placeholder={copy.placeholders.email}
                      value={formData.emailAddress}
                      onChange={handleChange("emailAddress")}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="website-request-business-type"
                      className="text-sm font-medium text-slate-700"
                    >
                      {copy.labels.businessType}
                    </label>
                    <select
                      id="website-request-business-type"
                      className={inputClassName}
                      value={formData.businessType}
                      onChange={handleChange("businessType")}
                      required
                    >
                      <option value="" disabled>
                        {copy.placeholders.businessType}
                      </option>
                      {copy.options.businessType.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="website-request-website-type"
                      className="text-sm font-medium text-slate-700"
                    >
                      {copy.labels.websiteType}
                    </label>
                    <select
                      id="website-request-website-type"
                      className={inputClassName}
                      value={formData.websiteTypeNeeded}
                      onChange={handleChange("websiteTypeNeeded")}
                      required
                    >
                      <option value="" disabled>
                        {copy.placeholders.websiteType}
                      </option>
                      {copy.options.websiteType.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="website-request-budget-range"
                      className="text-sm font-medium text-slate-700"
                    >
                      {copy.labels.budgetRange}
                    </label>
                    <select
                      id="website-request-budget-range"
                      className={inputClassName}
                      value={formData.budgetRange}
                      onChange={handleChange("budgetRange")}
                      required
                    >
                      <option value="" disabled>
                        {copy.placeholders.budgetRange}
                      </option>
                      {copy.options.budgetRange.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="website-request-project-details"
                    className="text-sm font-medium text-slate-700"
                  >
                    {copy.labels.projectDetails}
                  </label>
                  <textarea
                    id="website-request-project-details"
                    rows={6}
                    className={`${inputClassName} resize-y`}
                    placeholder={copy.placeholders.projectDetails}
                    value={formData.projectDetails}
                    onChange={handleChange("projectDetails")}
                    required
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-[#00A86B] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00A86B]/25 transition hover:bg-[#009A61] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? copy.sending : copy.button}
                  </button>
                  <p className="mt-3 text-center text-xs text-slate-500">
                    {copy.responseNote}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteRequestSection;
