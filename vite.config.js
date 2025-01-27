import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        // Ensure the output directory is set correctly
        outDir: "dist", // You can change this to any folder name you want

        // Increases the chunk size warning limit to handle large chunks
        chunkSizeWarningLimit: 1000, // 1MB

        // Optional: Manually chunk vendor libraries to avoid large single files
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        return "vendor"; // Separate vendor code into its own chunk
                    }
                },
            },
        },
    },
});
