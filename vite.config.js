import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
    plugins: [react()],
    base: command === 'build' ? '/visa-adisi/' : '/',
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    build: {
        outDir: 'dist',
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    motion: ['framer-motion'],
                },
            },
        },
    },
}));
