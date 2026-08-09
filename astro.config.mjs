import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'static',
  adapter: netlify(),
  site: 'https://kristofer-ljus-visuals.netlify.app',
  redirects: {
    '/': '/uppdrag/'
  }
});
