import moment from "moment"
import { useState } from "react"

export default function App() {
  const [comments, setComments] = useState(() => {
    const storageComments = localStorage.getItem("comments-list")
    if (!storageComments) return []
    return JSON.parse(storageComments)  
  })

  const [email, setEmail] = useState("")
  const [comentario, setComentario] = useState("")

  const formSubmit = (ev) => {
    ev.preventDefault()
    addComments({email, comentario})
  }

  const addComments = ({email, comentario}) => {
    const id = Math.floor(Math.random() * 1000000) //número aleatório até 1 milhão
    const data = moment().utcOffset("-03:00").format("DD/MM/YY")
    const hora = moment().utcOffset("-03:00").format("HH:mm:ss")
    console.log({data, hora})
    const novoComentario = { id, email, comentario, data, hora }
    setComments(arrAtual => {
      const novoArray = [...arrAtual, novoComentario]
      localStorage.setItem("comments-list", JSON.stringify(novoArray))
      return novoArray
    })
  }

  const removeComment = (id) => {
    setComments(arrAtual => {
      const novoArray = arrAtual.filter(comment => comment.id !== id)
      localStorage.setItem("comments-list", JSON.stringify(novoArray))
      return novoArray
    })  
  }

  return (
    <div id="app">
      <h1>Sessão de Comentários</h1>
      <form onSubmit={formSubmit}>
        <div>
        <label htmlFor="email">Email:</label> 
        <br />
        <input 
          type="text" 
          name="email" 
          id="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div>
        <label htmlFor="comentario">Comentário:</label>  
        <br />
        <textarea 
          name="comentario" 
          id="comentario" 
          value={comentario} 
          onChange={(e) => setComentario(e.target.value)} 
        />          
        </div>
        <button>Enviar Comentário</button>
      </form>
      <hr />
      <div>
        {
        comments.length > 0 ?
          comments.map((comment) => (
            <div key={comment.id}>
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <span>{comment.email}</span>
                <a onClick={() => removeComment(comment.id)}>Remover</a>
              </div>
              <p>Criado em: {comment.data + " - " + comment.hora}</p>
              <p>{comment.comentario}</p>
              <hr />
            </div>
          ))
        : (
          <div>Ainda não há comentários.</div>
        )
        }
      </div>
    </div>
  )
}

