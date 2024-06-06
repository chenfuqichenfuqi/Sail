import { defineConfig, Plugin } from 'vite'
import { VitePluginNode } from '../vitePlugin/src'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    ...(VitePluginNode({
      adapter: 'koa',

      appPath: './app.ts',

      exportName: 'viteNodeApp',

      initAppOnBoot: false,

      tsCompiler: 'esbuild',
    }) as Plugin[]),
  ],
})
