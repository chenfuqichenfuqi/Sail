import { defineConfig } from 'vite'
import { VitePluginNode } from 'vite-plugin-node'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'fastify',

      appPath: './app.ts',

      exportName: 'viteNodeApp',

      initAppOnBoot: false,

      tsCompiler: 'esbuild',
    }),
  ],
})