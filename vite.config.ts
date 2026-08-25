import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Portable builds inline all assets (images -> data URIs) so the
    // output can be flattened into a single shareable HTML file
    assetsInlineLimit: process.env.VITE_PORTABLE ? 100_000_000 : undefined,
    rollupOptions: process.env.VITE_PORTABLE
      ? {
          // Route-level React.lazy would emit separate chunks that a
          // file:// page cannot fetch, so collapse them back into one.
          output: { inlineDynamicImports: true },
        }
      : undefined,
  },
})
