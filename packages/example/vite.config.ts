import { defineConfig, Plugin } from 'vite'
import { VitePluginNodeHmr } from '../vitePlugin/src'
// import { VitePluginNode } from 'vite-plugin-node'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    VitePluginNodeHmr({
      adapter: 'koa',

      appPath: './app.ts',

      exportName: 'viteNodeApp',

      initAppOnBoot: false,

      handleHotUpdate: ctx => {
        console.log(ctx.file)
      },
    }) as Plugin,
  ],
})
