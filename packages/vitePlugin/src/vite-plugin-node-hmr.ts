import type { Plugin, UserConfig } from 'vite'
import { createMiddleware } from './server'
import { PLUGIN_NAME } from '.'
import type { VitePluginNodeConfig } from '.'

const defaultConfig: VitePluginNodeConfig = {
  adapter: 'koa',
  appPath: './app.ts',
  exportName: 'viteNodeApp',
  initAppOnBoot: false,
}
export function VitePluginNodeHmr(
  cfg: VitePluginNodeConfig = defaultConfig
): Plugin {
  const config: Plugin = {
    name: PLUGIN_NAME,
    config: () => {
      const plugincConfig: UserConfig & {
        VitePluginNodeConfig: VitePluginNodeConfig
      } = {
        build: {
          ssr: cfg.appPath,
          rollupOptions: {
            input: cfg.appPath,
          },
        },
        server: {
          hmr: true,
        },
        VitePluginNodeConfig: cfg,
      }

      return plugincConfig
    },
    configureServer: async server => {
      server.middlewares.use(await createMiddleware(server))
    },
  }
  return { ...config, ...cfg }
}
