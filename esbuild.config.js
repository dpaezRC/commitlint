const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["index.js"],
    bundle: true,
    platform: "node",
    target: "node18",
    outfile: "dist/bundle.js",
    minify: true,
    sourcemap: false,
    external: ["express"],
  })
  // eslint-disable-next-line no-undef
  .catch(() => process.exit(1));
