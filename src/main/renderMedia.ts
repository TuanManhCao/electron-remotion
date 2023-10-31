import { renderMedia, selectComposition } from '@remotion/renderer'
import { shell } from 'electron'
import path from 'path'
import os from 'os'
import { app } from 'electron'
// The composition you want to render
export async function render() {
  const compositionId = 'MyComp'
  const inputProps = {
    foo: 'bar'
  }
  const homeDirectory = os.homedir()
  const bundleDir = path.join(app.getAppPath(), 'out/remotion-bundle')
  const composition = await selectComposition({
    serveUrl: bundleDir,
    id: compositionId,
    inputProps
  })

  const downloadsFolderPath = path.join(homeDirectory, 'Downloads/output.mp4')

  await renderMedia({
    composition,
    serveUrl: bundleDir,
    codec: 'h264',
    outputLocation: downloadsFolderPath,
    inputProps
  })
  shell.showItemInFolder(downloadsFolderPath)
  console.log('Render done!')
}
