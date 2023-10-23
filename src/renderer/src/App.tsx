/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from 'react'

function App(): JSX.Element {
  const [rendered, setRendered] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  return (
    <div className="container">
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
        {isLoading ? 'Loading...' : 'Render Media'}
      </button>
      <br />
      {rendered && <h1>Rendered!</h1>}
    </div>
  )
}

export default App
