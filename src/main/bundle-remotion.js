const { bundle } = require('@remotion/bundler');
const path = require('path');
const os = require('os')

async function bundle_remotion() {
  const homeDirectory = os.homedir()
  const downloadsFolderPath = path.join(homeDirectory, 'Downloads/remotion-bundle/')
  const bundleLocation = await bundle({
    entryPoint: path.resolve('./src/remotion/index.ts'),
    outDir: downloadsFolderPath,
    // If you have a Webpack override, make sure to add it here
    webpackOverride: (config) => config
  })

  console.log(bundleLocation)
}

bundle_remotion()
