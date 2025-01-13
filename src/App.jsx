import './global.css'
import styles from "./app.module.css"

import { Post } from './components/post'
import { Header } from './components/header'
import { Sidebar } from './components/sidebar'

const posts = [
   {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO @ Rocketseat'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },

        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },

        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2025-01-13 11:09')
   },

   {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/maykbrito.png',
        name: 'Mayk Brito',
        role: 'Educator @ Rocketseat'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },

        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },

        { type: 'link', content: 'jane.design/doctorcare' },
     ],
      publishedAt: new Date('2025-01-10 11:11')
   },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author= {post.author}
                content = {post.content}
                publishedAt = {post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}