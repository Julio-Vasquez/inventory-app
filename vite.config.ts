import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    federation({
      name: 'host',
      remotes: {
        remote: {
          type: 'module',
          name: 'remote',
          entry: 'http://localhost:5001/remoteEntry.js',
          entryGlobalName: 'remote',
          shareScope: 'default',
        },
      },
      exposes: {},
      filename: 'remoteEntry.js',
      shared: ['react', 'react-dom'],
    }),
    react(),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    include: ['**/*.test.{ts,tsx}'],
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['node_modules', 'src/**/*.d.ts'],
    },
  },
})
