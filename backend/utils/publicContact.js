export const PUBLIC_CONTACT_PHONE = "+90 555 000 00 00";
export const PUBLIC_CONTACT_WHATSAPP = "905550000000";

export const withPublicContact = (value) => {
  if (!value || typeof value !== "object") return value;

  return {
    ...value,
    phone: PUBLIC_CONTACT_PHONE,
    whatsapp: PUBLIC_CONTACT_WHATSAPP,
  };
};
