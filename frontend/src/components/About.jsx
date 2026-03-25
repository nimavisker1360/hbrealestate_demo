import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import photoTest from "../assets/phototst.jpg";

const ADVANCED_CARD_ACCENTS = [
  {
    iconWrap:
      "bg-gradient-to-br from-violet-500/15 to-fuchsia-500/10 text-violet-700 ring-violet-200/70",
  },
  {
    iconWrap:
      "bg-gradient-to-br from-amber-500/15 to-orange-500/10 text-amber-800 ring-amber-200/70",
  },
  {
    iconWrap:
      "bg-gradient-to-br from-emerald-500/15 to-teal-500/10 text-emerald-800 ring-emerald-200/70",
  },
  {
    iconWrap:
      "bg-gradient-to-br from-sky-500/15 to-blue-500/10 text-sky-800 ring-sky-200/70",
  },
];

function AdvancedCapabilityIcon({ index }) {
  const cls = "h-5 w-5 shrink-0";
  switch (index) {
    case 0:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      );
    case 1:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      );
    case 2:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      );
  }
}

const About = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.toLowerCase().startsWith("tr")
    ? "tr"
    : i18n.language?.toLowerCase().startsWith("ru")
      ? "ru"
      : "en";
  const aboutContent = {
    en: {
      headingLines: [
        "Modern, Professional Design for Real Estate Businesses",
        "Multilingual, Responsive, and Built for Lead Generation",
        "Complete Features for Showcasing Projects and Capturing Clients",
      ],
      description:
        "This demo website is designed with a focus on attracting customers, presenting projects professionally, and building trust. Features like property listings, project pages, multilingual support, contact forms, and a mobile-friendly experience make it a professional and practical choice for real estate businesses.",
      advancedSectionTitle: "Advanced capabilities",
      advancedBadge: "Plus",
      advancedIntro:
        "Beyond professional design and core functionality, the platform can include advanced features that materially improve the user experience and commercial value of your project:",
      advancedFeatures: [
        {
          title: "AI-powered smart property search",
          description:
            "Smarter search flows powered by artificial intelligence so visitors reach listings that match their needs faster and with greater precision.",
        },
        {
          title: "Reservations and structured requests to management",
          description:
            "Users can reserve a property and submit a dedicated request form to your team, keeping follow-up and client communication organized.",
        },
        {
          title: "Comparative pricing vs. Istanbul",
          description:
            "Present and analyze property price insights across districts and regions, benchmarked against Istanbul, to support investor and buyer decisions.",
        },
        {
          title: "Foreign buyer statistics by year",
          description:
            "Charts and data on foreign nationals’ property purchases in Istanbul and other Turkish cities, broken down by year—building trust and supporting market analysis.",
        },
      ],
    },
    ru: {
      headingLines: [
        "Современный и профессиональный дизайн для бизнеса недвижимости",
        "Мультиязычный, адаптивный и ориентированный на лиды",
        "Полный набор возможностей для презентации проектов и привлечения клиентов",
      ],
      description:
        "Этот демо-сайт создан с акцентом на привлечение клиентов, профессиональную презентацию проектов и формирование доверия. Такие возможности, как листинг объектов, страницы проектов, мультиязычность, контактные формы и мобильная версия, делают его профессиональным и практичным решением для бизнеса в сфере недвижимости.",
      advancedSectionTitle: "Расширенные возможности",
      advancedBadge: "Плюс",
      advancedIntro:
        "Помимо профессионального дизайна и базового функционала платформа может включать продвинутые функции, которые заметно повышают удобство для пользователей и коммерческую ценность проекта:",
      advancedFeatures: [
        {
          title: "Умный поиск объектов с ИИ",
          description:
            "Улучшенный поиск на основе искусственного интеллекта: пользователи быстрее и точнее находят варианты, соответствующие их запросам.",
        },
        {
          title: "Бронирование и заявки руководству",
          description:
            "Клиенты могут забронировать объект и отправить заявку через отдельную форму — так проще выстроить последующую работу и коммуникацию.",
        },
        {
          title: "Сравнение цен по районам со Стамбулом",
          description:
            "Отображение и анализ данных о ценах на недвижимость в разных локациях в сравнении со Стамбулом для более взвешенных решений покупателей и инвесторов.",
        },
        {
          title: "Статистика покупок иностранцами по годам",
          description:
            "Показатели и графики объёма покупок недвижимости иностранными гражданами в Стамбуле и других городах Турции с разбивкой по годам — для доверия к сайту и анализа рынка.",
        },
      ],
    },
    tr: {
      headingLines: [
        "Gayrimenkul Isletmeleri Icin Modern ve Profesyonel Tasarim",
        "Cok Dilli, Responsive ve Lead Odakli",
        "Projeleri Tanimak ve Musteri Kazanmak Icin Tam Donanim",
      ],
      description:
        "Bu demo web sitesi, musteri kazanimi, projelerin profesyonel sunumu ve guven olusturma odagiyla tasarlandi. Ilan listeleri, proje sayfalari, cok dilli yapi, iletisim formlari ve mobil uyumlu deneyim gibi ozellikler sayesinde gayrimenkul isletmeleri icin profesyonel ve islevsel bir secenektir.",
      advancedSectionTitle: "İleri düzey özellikler",
      advancedBadge: "Ekstra",
      advancedIntro:
        "Profesyonel tasarım ve temel işlevlerin ötesinde, platform; kullanıcı deneyimini ve projenin ticari değerini belirgin şekilde artırabilecek gelişmiş yetenekler de sunabilir:",
      advancedFeatures: [
        {
          title: "Yapay zekâ destekli akıllı emlak araması",
          description:
            "Yapay zekâ ile arama sürecini güçlendirerek kullanıcıların ihtiyaçlarına uygun ilanlara daha hızlı ve isabetli şekilde ulaşmasını sağlar.",
        },
        {
          title: "Rezervasyon ve yönetime yapılandırılmış talepler",
          description:
            "Kullanıcılar seçtikleri konutu rezerve edebilir; özel talep formu üzerinden yönetime iletebilir — müşteri takibi ve iletişim daha düzenli olur.",
        },
        {
          title: "İstanbul’a göre bölgeler arası fiyat karşılaştırması",
          description:
            "Farklı bölgelerdeki emlak fiyat verilerini İstanbul ile kıyaslayarak sunmak ve analiz etmek; alıcı ve yatırımcıların kararını destekler.",
        },
        {
          title: "Yıllara göre yabancı alım istatistikleri",
          description:
            "İstanbul ve Türkiye’nin diğer şehirlerinde yabancı uyruklu alımlara ilişkin yıllık istatistikler ve grafikler — site güvenilirliği ve piyasa analizi için.",
        },
      ],
    },
  }[currentLang];
  const featureHighlights = {
    en: [
      {
        title: "Multilingual",
        description: "Support for multiple languages",
      },
      {
        title: "Responsive",
        description: "Looks great on mobile and desktop",
      },
      {
        title: "Lead-Driven",
        description: "Designed to generate customer inquiries",
      },
    ],
    ru: [
      {
        title: "Мультиязычный",
        description: "Поддержка нескольких языков",
      },
      {
        title: "Адаптивный",
        description: "Отлично выглядит на мобильных и десктопе",
      },
      {
        title: "Ориентирован на лиды",
        description: "Создан для получения заявок от клиентов",
      },
    ],
    tr: [
      {
        title: "Çok Dilli",
        description: "Birden fazla dil desteği",
      },
      {
        title: "Responsive",
        description: "Mobil ve masaüstünde kusursuz görünüm",
      },
      {
        title: "Lead Odaklı",
        description: "Müşteri talebi toplamak için tasarlandı",
      },
    ],
  }[currentLang];

  const [isVisible, setIsVisible] = useState(false);
  const [isFanned, setIsFanned] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [frozenFrames, setFrozenFrames] = useState({});

  const cardData = [
    { src: "/Arnatakoy.gif", alt: "Arnavutköy", href: "https://www.demo.com/en/blog/why-invest-in-arnavutky", animated: true },
    { src: "/banner.gif", alt: "Salamis Holiday Home", href: "https://www.demo.com/en/projects/salamis-holiday-home-apartments-demo-real-estate-69be44337d9987ae6278ad9c", animated: true },
    { src: photoTest, alt: "Property", href: null },
  ];

  const activeCard = isFanned ? hoveredCard : 0;

  useEffect(() => {
    [
      { index: 0, src: "/Arnatakoy.gif" },
      { index: 1, src: "/banner.gif" },
    ].forEach(({ index, src }) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        canvas.getContext("2d").drawImage(img, 0, 0);
        try {
          setFrozenFrames((prev) => ({ ...prev, [index]: canvas.toDataURL() }));
        } catch {}
      };
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const top = aboutSection.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight - 100;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="about"
      className="max-padd-container py-16 xl:py-28 overflow-x-hidden scroll-mt-20"
    >
      <h2 className="sr-only">{t("about.title")}</h2>
      <div className="flex flex-col xl:flex-row gap-10 xl:gap-12">
        {/* Left side - Property Cards Design */}
        <div
          className={`flex-1 relative min-h-[400px] sm:min-h-[480px] flex items-center justify-center ${
            isVisible ? "animate-about-slide-left" : "opacity-0"
          }`}
        >
          {/* Stacked Cards */}
          <div
            className="relative w-[240px] sm:w-[280px] h-[320px] sm:h-[380px] ml-16 sm:ml-24"
            onMouseEnter={() => setIsFanned(true)}
            onMouseLeave={() => { setIsFanned(false); setHoveredCard(null); }}
          >
            {cardData.map((card, i) => {
              const isHovered = hoveredCard === i;

              const collapsed = { x: i * 12, y: i * 10, rotate: i * 3, zIndex: 30 - i * 10, opacity: 1 - i * 0.12 };
              const fanAngle = (i - 1) * 18;
              const fanX = (i - 1) * 90;
              const fanned = { x: fanX, y: 0, rotate: fanAngle, zIndex: 30 - i * 10, opacity: 1 };

              const pos = isFanned ? fanned : collapsed;
              const liftY = isHovered && isFanned ? -40 : 0;

              return (
                <div
                  key={i}
                  className="absolute inset-0 w-[240px] sm:w-[280px] h-[320px] sm:h-[380px] rounded-3xl bg-white p-2 shadow-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]"
                  style={{
                    zIndex: isHovered ? 40 : pos.zIndex,
                    opacity: pos.opacity,
                    transform: `translate(${pos.x}px, ${pos.y + liftY}px) rotate(${pos.rotate}deg)${isHovered ? " scale(1.03)" : ""}`,
                    cursor: card.href ? "pointer" : "default",
                  }}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => {
                    if (card.href) window.open(card.href, "_blank", "noopener,noreferrer");
                  }}
                >
                  <img
                    src={card.animated && i !== activeCard && frozenFrames[i] ? frozenFrames[i] : card.src}
                    alt={card.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              );
            })}
          </div>

          {/* Floating Labels */}
          {/* Budget Label */}
          <div
            className={`absolute top-1/3 -left-2 sm:left-0 bg-white rounded-full px-3 sm:px-4 py-2 sm:py-2.5 shadow-xl flex items-center gap-2 sm:gap-3 z-50 ${
              isVisible ? "animate-float" : ""
            }`}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1a4d3e] flex items-center justify-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-gray-900">
                {t("about.recommendedHomes")}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500">
                {t("about.basedOnBudget")}
              </div>
            </div>
          </div>

          {/* Location Label */}
          <div
            className={`absolute top-1/2 -left-4 sm:-left-2 bg-white rounded-full px-3 sm:px-4 py-2 sm:py-2.5 shadow-xl flex items-center gap-2 sm:gap-3 z-50 ${
              isVisible ? "animate-float-delayed" : ""
            }`}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#f97316] flex items-center justify-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-gray-900">
                {t("about.recommendedHomes")}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500">
                {t("about.basedOnLocation")}
              </div>
            </div>
          </div>

          {/* Floating animation styles */}
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }
            .animate-float {
              animation: float 3s ease-in-out infinite;
            }
            .animate-float-delayed {
              animation: float 3s ease-in-out infinite;
              animation-delay: 1.5s;
            }
          `}</style>
        </div>
        {/* Right side */}
        <div className="flex-1 flex justify-center flex-col text-left xl:pl-2">
          <div
            className={`${
              isVisible ? "animate-about-slide-right" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <ul className="m-0 list-none space-y-5 p-0 sm:space-y-6">
              {aboutContent.headingLines.map((line, index) => (
                <li key={`${line}-${index}`} className="flex gap-3.5 sm:gap-4">
                  <span
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 shadow-sm ring-1 ring-emerald-100/90 sm:h-10 sm:w-10"
                    aria-hidden
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-[18px] w-[18px] text-blue-600 sm:h-5 sm:w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a1 1 0 010 1.415l-7.5 7.5a1 1 0 01-1.415 0l-3.5-3.5a1 1 0 111.414-1.414l2.793 2.793 6.793-6.793a1 1 0 011.415 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="min-w-0 pt-0.5 text-base font-semibold leading-snug tracking-tight text-slate-900 sm:text-lg sm:leading-snug">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`mt-8 max-w-prose border-t border-slate-200/70 pt-8 ${
              isVisible ? "animate-about-slide-right" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <p className="m-0 text-[15px] leading-[1.65] text-slate-600 sm:text-base sm:leading-relaxed">
              {aboutContent.description}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`mt-14 w-full space-y-10 xl:mt-16 ${
          isVisible ? "animate-about-slide-right" : "opacity-0"
        }`}
        style={{ animationDelay: "0.35s" }}
      >
        <div className="relative overflow-hidden rounded-3xl border border-emerald-200/50 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/50 p-6 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_20px_50px_-24px_rgba(6,78,59,0.12)] sm:p-8">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-teal-400/10 blur-3xl"
            aria-hidden
          />
          <div className="relative flex flex-col gap-2">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-emerald-800 shadow-sm ring-1 ring-emerald-100">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
              <span className="tracking-wide uppercase">{aboutContent.advancedBadge}</span>
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              {aboutContent.advancedSectionTitle}
            </h3>
            <p className="max-w-prose text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              {aboutContent.advancedIntro}
            </p>
          </div>
          <ul className="relative mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {aboutContent.advancedFeatures.map((feat, featIndex) => {
              const accent = ADVANCED_CARD_ACCENTS[featIndex] ?? ADVANCED_CARD_ACCENTS[0];
              const anchorId =
                featIndex === 0
                  ? "about-ai-search"
                  : featIndex === 1
                    ? "about-reservation"
                    : featIndex === 2
                      ? "about-market-insights"
                      : undefined;
              return (
                <li key={feat.title} id={anchorId} className={anchorId ? "scroll-mt-24" : undefined}>
                  <div
                    className="group flex h-full gap-4 rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200/60 hover:shadow-md sm:p-5"
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 ${accent.iconWrap}`}
                    >
                      <AdvancedCapabilityIcon index={featIndex} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-[15px] font-semibold leading-snug text-slate-900 sm:text-base">
                        {feat.title}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {featureHighlights.map((item, index) => (
            <div
              key={item.title}
              id={index === 0 ? "about-multilingual" : undefined}
              className={`rounded-2xl border border-slate-200/60 bg-primary p-5 shadow-sm transition-shadow hover:shadow-md ${
                index === 0 ? "scroll-mt-24" : ""
              } ${isVisible ? "animate-about-pop" : "opacity-0"}`}
              style={{ animationDelay: `${0.45 + index * 0.08}s` }}
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
