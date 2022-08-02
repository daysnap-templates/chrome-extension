import React from 'react'
import { createRoot } from 'react-dom/client'

import './globals.css'
import styles from './index.module.scss'

const App = () => {
  return (
    <>
      <div className={styles.wrap}>12312</div>
      <div className="caret-amber-100 box-border">2222223</div>
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(<App />)
