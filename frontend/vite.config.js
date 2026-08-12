import { defineConfig } from "vite";

export default defineConfig({
    server: {
        proxy: {
            "/uploads": {
                target: "http://localhost",
                changeOrigin: true
            },
            "/api": {
                target: "http://localhost/stock-exchange-api",
                changeOrigin: true
            }
        }
    }
});