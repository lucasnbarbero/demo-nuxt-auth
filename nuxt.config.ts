import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const vuefirePkg = JSON.parse(readFileSync(resolve(__dirname, 'node_modules/vuefire/package.json'), 'utf-8'));
const nuxtVuefirePkg = JSON.parse(readFileSync(resolve(__dirname, 'node_modules/nuxt-vuefire/package.json'), 'utf-8'));

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-vuefire'],
  devtools: { enabled: true, experimental: { timeline: true } },
  ssr: true,
  nitro: {
    preset: 'firebase',
    firebase: {
      gen: 2,
      nodeVersion: '18',
    },
    prerender: {
      crawlLinks: false,
      routes: ['/', '/login'],
      ignore: ['/posts/others'],
    },
  },
  runtimeConfig: {
    public: {
      vuefireVersion: vuefirePkg.version,
      nuxtVuefireVersion: nuxtVuefirePkg.version,
    },
  },
  css: ['~/assets/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vuefire: {
    auth: {
      enabled: true,
    },
    config: {
      apiKey: 'AIzaSyDIKvMUrAjoUz0xwK2Xp_ZWajuThWAaXSk',
      authDomain: 'pruebas-lucas-860e2.firebaseapp.com',
      projectId: 'pruebas-lucas-860e2',
      storageBucket: 'pruebas-lucas-860e2.appspot.com',
      messagingSenderId: '102615490738',
      appId: '1:102615490738:web:83b3b58f2ba72b37a6e9ab',
    },
  },
});
