const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['./src/index.js'],
    bundle: true,
    platform: 'node',
    target: 'node18',
    outfile: 'dist/bundle.js',
    minify: true,
    sourcemap: false,
    external: ['express'],
  })
  .catch(() => process.exit(1));
