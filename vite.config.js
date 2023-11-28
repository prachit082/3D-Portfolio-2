import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 25000, // set your desired limit in kilobytes
  },
});
