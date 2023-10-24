/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from 'react'
import { Player } from '@remotion/player'
import { MyComposition } from '../../remotion/Composition'
function App(): JSX.Element {
  const [rendered, setRendered] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  return (
    <div className="container">
      <Player
        component={MyComposition}
        durationInFrames={150}
        compositionWidth={1920}
        compositionHeight={1080}
        fps={30}
        autoPlay
        loop
        controls
        style={{
          width: '100%',
          height: '480px'
        }}
      />
      <button
        className="btn"
        style={{ marginTop: '1rem', marginBottom: '1rem', padding: '1rem', fontSize: '1.5rem' }}
        onClick={async () => {
          setIsLoading(true)
          const isRendered = await window.api.renderMedia()
          setRendered(isRendered)
          console.log(`Render value: ${isRendered}`)
          setIsLoading(false)
        }}
      >
        {isLoading ? 'Rendering...' : 'Render Media'}
      </button>
      <br />
      {rendered && <h1>Rendered!</h1>}
    </div>
  )
}

export default App
