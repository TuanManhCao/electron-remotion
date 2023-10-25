const { bundle } = require('@remotion/bundler');
const path = require('path');

async function bundle_remotion() {
  const bundleLocation = await bundle({
    entryPoint: path.resolve('./src/remotion/index.ts'),
    outDir: path.resolve('./out/remotion-bundle/'),
    // If you have a Webpack override, make sure to add it here
    webpackOverride: (config) => config
  })

  console.log(bundleLocation)
}

bundle_remotion()
