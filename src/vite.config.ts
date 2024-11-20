import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: "local", // Określa, że style mają być lokalne (domyślne ustawienie)
      generateScopedName: "[name]__[local]___[hash:base64:5]", // Opcjonalny schemat nazewnictwa klas
      hashPrefix: "my-prefix", // Opcjonalny prefiks hash dla unikalności
    },
  },
});
