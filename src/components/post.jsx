import styles from "./post.module.css"

import { Comment } from "./comment"
import { Avatar } from "./avatar"

export function Post() {
   return (
      <article className={styles.post}>
         <header>
            <div className={styles.author}>
               <Avatar src="https://github.com/diego3g.png" />

               <div className={styles.authorInfo}>
                  <strong>Diego Fernandes</strong>
                  <span>CTO @Rocketseat</span>
               </div>
            </div>

            <time title="09 de Janeiro às 19:55" datetime="2024-01-09 19:55:56">Publicado há 1h</time>
         </header>

         <div className={styles.content}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p>👉{" "}<a href="">jane.design/doctorcare</a></p>

            <p>
               <a href="">#novoprojeto{" "}</a>
               <a href="">#nlw{" "}</a>
               <a href="">#rocketseat</a>
            </p>
         </div>

         <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea
               placeholder="Deixe um comentário"
            />

            <footer>
               <button type="submit">Publicar</button>
            </footer>
         </form>
         
         <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
         </div>
      </article>
   )
}