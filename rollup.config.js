import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

const name = 'domPanZoom';

export default {
  input: 'src/index.js',
  output: [
    // ESM
    {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true
    },
    // CommonJS
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: true,
      exports: 'default'
    },
    // UMD (browser global)
    {
      file: 'dist/dom-pan-zoom.umd.js',
      format: 'umd',
      name,
      sourcemap: true
    },
    {
      file: 'dist/dom-pan-zoom.umd.min.js',
      format: 'umd',
      name,
      plugins: [
        terser({
          compress: true,
          mangle: true,
          format: {
            comments: false
          }
        })
      ]
    }
  ],
  plugins: [resolve()]
};
