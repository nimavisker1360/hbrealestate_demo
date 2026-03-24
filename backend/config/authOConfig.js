import { auth } from "express-oauth2-jwt-bearer";
import { loadBackendEnv } from "./loadEnv.js";

loadBackendEnv();

const auth0Domain =
  process.env.AUTH0_DOMAIN || "dev-pdz8rd3zuiwyzqzo.us.auth0.com";
const auth0Audience =
  process.env.AUTH0_AUDIENCE || "N7a0UjSNt8egPgXFOZI5EZifFeCekPoP";

const jwtCheck = auth({
  audience: auth0Audience,
  issuerBaseURL: `https://${auth0Domain.replace(/\/+$/, "")}/`,
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
