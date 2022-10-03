import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bulma/css/bulma.css'
import TableSandbox from './sandbox/table'
import ButtonSandbox from './sandbox/button'
import { startWave } from './hooks/useWave'

startWave();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <div className="container">
    <TableSandbox />
    <ButtonSandbox />
    </div>
  </React.StrictMode>
)
