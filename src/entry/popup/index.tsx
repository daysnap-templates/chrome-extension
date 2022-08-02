import React from 'react'
import { createRoot } from 'react-dom/client'

const App = () => {
  return <div>1111</div>
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(<App />)
