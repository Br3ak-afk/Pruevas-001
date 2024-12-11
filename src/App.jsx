  import { useState } from 'react'
  import './App.css'
  import UnaLandingPage from './componentes/landingpage.jsx';

  function App() {
    const [count, setCount] = useState(0)

    return (
      <>
        <UnaLandingPage />
      </>
    )
  }

  export default App
