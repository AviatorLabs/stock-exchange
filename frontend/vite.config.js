import { defineConfig } from "vite";

export default defineConfig({
    server: {
        proxy: {
            "/api": {
                target: "http://localhost/stock-exchange-api",
                changeOrigin: true
            }
        }
    }
});