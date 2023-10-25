import { renderMedia, selectComposition } from '@remotion/renderer'
import { shell } from 'electron'
import path from 'path'
import os from 'os'
// The composition you want to render
export async function render() {
  const compositionId = 'MyComp'
  // You only have to create a bundle once, and you may reuse it

  // console.log('🚀 ~ file: renderMedia.ts:14 ~ render ~ bundleLocation:', bundleLocation)
  // Parametrize the video by passing props to your component.
  const inputProps = {
    foo: 'bar'
  }
  // Get the composition you want to render. Pass `inputProps` if you
  // want to customize the duration or other metadata.
  const composition = await selectComposition({
    serveUrl: path.resolve('out/remotion-bundle'),
    id: compositionId,
    inputProps
  })
  console.log('🚀 ~ file: renderMedia.ts:26 ~ render ~ composition:', composition)

  // Render the video. Pass the same `inputProps` again
  // if your video is parametrized with data.
  const homeDirectory = os.homedir()
  const downloadsFolderPath = path.join(homeDirectory, 'Downloads/output.mp4')
  await renderMedia({
    composition,
    serveUrl: path.resolve('out/remotion-bundle'),
    codec: 'h264',
    outputLocation: downloadsFolderPath,
    inputProps
  })
  shell.showItemInFolder(downloadsFolderPath)
  console.log('Render done!')
}
