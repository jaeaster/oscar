import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(
    preprocess({
      postcss: true,
    }),
  ),

  kit: {
    adapter: adapter({
      fallback: 'src/index.html'
    }),
    files: {
      template: 'src/index.html'
    }
  },
};

export default config;
