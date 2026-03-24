/**
 * Vercel serverless entry when the project Root Directory is `frontend`.
 * Rewrites `/api/*` and `/sitemap.xml` must point here (see frontend/vercel.json).
 */
import app from "../../backend/app.js";

export default app;
