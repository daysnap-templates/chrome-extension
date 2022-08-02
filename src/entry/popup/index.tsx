import React from 'react'
import { createRoot } from 'react-dom/client'
import styles from './index.module.scss'

const App = () => {
  return <div className={styles.wrap}>23333</div>
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(<App />)
