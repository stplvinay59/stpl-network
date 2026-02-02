import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/stpl-network/",
  plugins: [react()],
});
