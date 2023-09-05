import { useState } from "react"
import moment from "moment"

export default function conteudoJsPrincipal() {
  const [conteudo, setConteudo] = useState(() => {
    const storageConteudo = localStorage.getItem("conteudo-list")
    if (!storageConteudo) return []
    return JSON.parse(storageConteudo)  
  })

  const addConteudo = ({email, comentario}) => {
    const id = Math.floor(Math.random() * 1000000) //número aleatório até 1 milhão
    const data = moment().utcOffset("-03:00").format("DD/MM/YY")
    const hora = moment().utcOffset("-03:00").format("HH:mm:ss")
    const novoComentario = { id, email, comentario, data, hora }

    setConteudo(arrAtual => {
      const novoArray = [novoComentario, ...arrAtual]
      localStorage.setItem("conteudo-list", JSON.stringify(novoArray))
      return novoArray
    })
  }

  const removeConteudo = (id) => {
    setConteudo(arrAtual => {
      const novoArray = arrAtual.filter(conteudo => conteudo.id !== id)
      localStorage.setItem("conteudo-list", JSON.stringify(novoArray))
      return novoArray
    })  
  }
  
  return { conteudo, addConteudo, removeConteudo }
}