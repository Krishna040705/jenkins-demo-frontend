import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>CICD JENKINS DEMO - 31039</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      <p>Jenkins source code uses Git Repo and Branch /main.</p>
    <p>
      In <strong>Build Trigger</strong>,<br />
      select Poll SCM and use schedule: <code>* * * * *</code><br />
      <br />
      <strong>In Build Steps, add Windows batch command:</strong><br />
      <code>call npm install</code><br />
      <code>call npm run build</code><br />
      <code>rmdir /S /Q "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\ecommerce"</code><br />
      <code>mkdir "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\ecommerce"</code><br />
      <code>xcopy /E /I /Y dist\* "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\ecommerce"</code><br />
      <br />
      <strong>Another Build Step with Windows Batch Command:</strong><br />
      <code>call net stop Tomcat9</code><br />
      <code>call net start Tomcat9</code><br />
    </p>
     
    </>
  )
}

export default App
