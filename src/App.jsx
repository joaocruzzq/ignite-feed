import { Header } from './components/header'

import './global.css'
import styles from "./app.module.css"
import { Sidebar } from './components/sidebar'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main> post </main>
      </div>
    </div>
  )
}