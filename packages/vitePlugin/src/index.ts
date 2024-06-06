import type { IncomingMessage, ServerResponse } from 'http'
import type { Options } from '@swc/core'
import type { Connect, UserConfig, ViteDevServer, Plugin } from 'vite'

export { VitePluginNodeHmr } from './vite-plugin-node-hmr'

export const PLUGIN_NAME = 'vite-plugin-node-hmr'

export declare type SupportedFrameworks =
  | 'express'
  | 'nest'
  | 'koa'
  | 'fastify'
  | 'marble'

export declare interface RequestAdapterParams<App> {
  app: App
  server: ViteDevServer
  req: IncomingMessage
  res: ServerResponse
  next: Connect.NextFunction
}

export declare type RequestAdapter<App = any> = (
  params: RequestAdapterParams<App>
) => void | Promise<void>

export declare type RequestAdapterOption = SupportedFrameworks | RequestAdapter

export declare type SupportedTSCompiler = 'esbuild' | 'swc'

export interface VitePluginNodeConfig extends Partial<Plugin> {
  appPath: string
  adapter: RequestAdapterOption
  appName?: string
  initAppOnBoot?: boolean
  exportName?: string
}

export declare interface ViteConfig extends UserConfig {
  VitePluginNodeConfig: VitePluginNodeConfig
}
