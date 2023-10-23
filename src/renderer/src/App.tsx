import Versions from './components/Versions'
// import icons from './assets/icons.svg'

function App(): JSX.Element {
  return (
    <div className="container">
      <Versions></Versions>
      <button className="btn" onClick={async () => {
        const newCounterValue = await window.api.increaseCounter()
         console.log(`Counter: ${newCounterValue}`)
      }}>
        Say Hello
      </button>

    </div>
  )
}

export default App
