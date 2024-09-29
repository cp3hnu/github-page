import { defineConfig } from "vite";
import path from "node:path";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "move-index-html",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === "/") {
            req.url = "/index.html";
          }
          next();
        });
      }
    }
  ],
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, "public/index.html")
    }
  }
});
