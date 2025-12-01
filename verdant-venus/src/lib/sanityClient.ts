import { createClient } from "@sanity/client";

// Значення за замовчуванням з `test/sanity.config.ts`,
// але перевага завжди за змінними оточення.
const projectId =
  import.meta.env.PUBLIC_SANITY_PROJECT_ID || "l7n0o2d0";
const dataset =
  import.meta.env.PUBLIC_SANITY_DATASET || "production";

if (!import.meta.env.PUBLIC_SANITY_PROJECT_ID) {
  console.warn(
    "[sanityClient] PUBLIC_SANITY_PROJECT_ID is not set. Falling back to hardcoded projectId=l7n0o2d0."
  );
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2025-12-01",
  useCdn: true,
});

export const sanityPreviewClient = createClient({
  projectId,
  dataset,
  apiVersion: "2025-12-01",
  useCdn: false,
  token: import.meta.env.SANITY_API_READ_TOKEN,
  perspective: "previewDrafts",
});


