export const PUBLIC_CONTACT_PHONE = "+90 552 607 89 00";
export const PUBLIC_CONTACT_WHATSAPP = "905526078900";

export const withPublicContact = (value) => {
  if (!value || typeof value !== "object") return value;

  return {
    ...value,
    phone: PUBLIC_CONTACT_PHONE,
    whatsapp: PUBLIC_CONTACT_WHATSAPP,
  };
};
