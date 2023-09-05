export default function Conteudo({ email, data, hora, comentario, onRemove }) {
  return (
    <div>
      <div style={{display:"flex", justifyContent:"space-between"}}>
      <span>{email}</span>
      <a onClick={onRemove}>Remover</a>
      </div>
      <p>Em: {data + " - " + hora}</p>
      <p>{comentario}</p>
      <hr />
    </div>
  )
}