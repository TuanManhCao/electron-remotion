/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from 'react'
import { Player } from '@remotion/player'
import { MyComposition } from '../../remotion/Composition'
type Data = {
  status: 'error' | 'success',
  message: string
}
function App(): JSX.Element {
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
          const data: Data = await window.api.renderMedia() as unknown as Data
          if (data.status === 'error') {
            console.log('Errror: ', data.message)
          } else {
            console.log('OKKKKK: ', data.message)
          }

          setIsLoading(false)
        }}
      >
        {isLoading ? 'Rendering...' : 'Render Media'}
      </button>
      <br />
    </div>
  )
}

export default App
