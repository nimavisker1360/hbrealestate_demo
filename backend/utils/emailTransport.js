import nodemailer from "nodemailer";

const normalizeEnvValue = (value) => String(value || "").trim();

export const getEmailSenderAddress = () => normalizeEnvValue(process.env.EMAIL_USER);

export const getEmailPassword = () =>
  String(process.env.EMAIL_PASS || "").replace(/\s+/g, "");

export const getEmailRecipientAddress = () =>
  normalizeEnvValue(process.env.EMAIL_TO) || getEmailSenderAddress();

export const hasEmailTransportConfig = () =>
  Boolean(getEmailSenderAddress() && getEmailPassword());

export const createEmailTransporter = () => {
  if (!hasEmailTransportConfig()) return null;

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: getEmailSenderAddress(),
      pass: getEmailPassword(),
    },
  });
};
