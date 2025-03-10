import styles from "./comment.module.css"

import { Avatar } from "./avatar"
import { ThumbsUp, Trash } from "phosphor-react"

import { useState } from "react"

interface CommentProps {
   content: string
   onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
   const [likeCount, setLikeCount] = useState(0)

   function handleDeleteComment() {
      onDeleteComment(content)
   }

   function handleLikeComment() {
      setLikeCount(likeCount + 1)
   }

   return (
      <div className={styles.comment}>
         <Avatar hasBorder={false} src="https:github.com/joaocruzzq.png" />

         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
               <header>
                  <div className={styles.authorAndTime}>
                     <strong>João Pedro Cruz</strong>
                     <time title="09 de Janeiro às 19:55" dateTime="2024-01-09 19:55:56">Cerca de 2h atrás</time>
                  </div>

                  <button onClick={handleDeleteComment} title="Deletar comentário">
                     <Trash size={24} />
                  </button>
               </header>

               <p>{content}</p>
            </div>

            <footer>
               <button onClick={handleLikeComment}>
                  <ThumbsUp />
                  Aplaudir <span>{likeCount}</span>
               </button>
            </footer>
         </div>
      </div>
   )
}