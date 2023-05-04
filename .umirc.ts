import { defineConfig } from 'dumi';

export default defineConfig({
  title: ' ',
  favicon: 'http://cdn.dooring.cn/dr/xijs.png',
  logo: 'http://cdn.dooring.cn/dr/xijs.png',
  outputPath: './xijs',
  base: '/xijs/',
  publicPath: '/xijs/',
  mode: 'site',
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '我要共建',
      path: 'https://github.com/MrXujiang/xijs',
    },
  ],

  // more config: https://d.umijs.org/config
});
