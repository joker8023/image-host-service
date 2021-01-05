import { defineConfig } from 'umi';
import pageRoutes from './router.config';

export default defineConfig({
  dynamicImport: {
    loading: '@/components/common/LoadingPage',
  },
  antd: {},
  title: 'IMAGE-HOST-SERVICE',
  routes: pageRoutes,
  dva: {
    hmr: true,
    // 默认为 false，且必须 设置 false，否则 plugin-dva 会重复加载 model
    skipModelValidate: false,
  },
  'dva-enhance': {},
  targets: {
    ie: 11,
  },
  lessLoader: {
    disableCSSModules: true,
    javascriptEnabled: true,
  },
  history: { type: 'browser' },
  hash: true,
  // ssr: {
  //   mode: 'stream',
  // },
  proxy: {
    '/api': {
      target: 'http://172.31.12.4:6005',
      // target: 'http://greencourtdevweb:6005',
      changeOrigin: true,
    },
  },
});
