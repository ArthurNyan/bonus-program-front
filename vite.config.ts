import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [react(), svgr({ include: 'src/**/*.svg' })],
    resolve: {
        alias: [{ find: '@', replacement: '/src' }],
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:5000/',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/u, ''),
            },
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                },
            },
        },
    },
});
