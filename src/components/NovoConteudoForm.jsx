import { useState } from "react"
import TextInput from "./TextInput"
import Textarea from "./Textarea"


export default function NovoConteudoForm({ addConteudo }) {
  const [email, setEmail] = useState("")
  const [comentario, setComentario] = useState("")

  const formSubmit = (ev) => {
    ev.preventDefault()
    addConteudo({email, comentario})
    setEmail("")
    setComentario("")
  }

  return (
    <form onSubmit={formSubmit}>
    <TextInput
      email={email}
      setEmail={setEmail}
    />
    <Textarea 
      comentario={comentario}
      setComentario={setComentario}
    />
    <button>Enviar Comentário</button>
  </form>
  )
}