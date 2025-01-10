import styles from "./comment.module.css"

import { ThumbsUp, Trash } from "phosphor-react"

export function Comment() {
   return (
      <div className={styles.comment}>
         <img src="https:github.com/joaocruzzq.png" />

         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
               <header>
                  <div className={styles.authorAndTime}>
                     <strong>João Pedro Cruz</strong>
                     <time title="09 de Janeiro às 19:55" datetime="2024-01-09 19:55:56">Cerca de 2h atrás</time>
                  </div>

                  <button title="Deletar comentário">
                     <Trash size={24} />
                  </button>
               </header>

               <p>Muito bom Devon, parabéns!</p>
            </div>

            <footer>
               <button>
                  <ThumbsUp />
                  Aplaudir <span>20</span>
               </button>
            </footer>
         </div>
      </div>
   )
}