// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), 
    sanity(
      {
        projectId: process.env.PUBLIC_SANITY_PROJECT_ID || "l7n0o2d0",
        dataset: process.env.PUBLIC_SANITY_DATASET || "production",
        useCdn: false, // для статичного білду й точних даних
        apiVersion: "2025-01-01",
        // опційно, якщо хочеш читати драфти / використовувати Visual Editing:
        // token: process.env.SANITY_API_READ_TOKEN,
        studioBasePath: "/studio", // Studio буде на /studio
      }
    )],

  vite: {
    plugins: [tailwindcss()]
  }
});