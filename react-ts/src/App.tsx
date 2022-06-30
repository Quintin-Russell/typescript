import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Counter from './components/counter'
import Resume from './components/resume'

function App() {
  const [count, setCount] = useState<number>(0)
  const [resume, setResume] = useState<boolean>(false)

  const show = () => {
    return (!resume)
      ? <Counter name="Quinn" />
      : <Resume resume={resume}/>
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => setResume(!resume)}>Do you want to see my resume?</button>
          {show()}
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
