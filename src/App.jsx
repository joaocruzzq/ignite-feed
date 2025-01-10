import './global.css'
import styles from "./app.module.css"

import { Post } from './components/post'
import { Header } from './components/header'
import { Sidebar } from './components/sidebar'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}