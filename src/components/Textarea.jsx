export default function Textarea({ comentario, setComentario }) {
  return (
    <div>
      <label htmlFor="comentario">Comentário:</label>  
      <br />
      <textarea 
        name="comentario" 
        id="comentario" 
        value={comentario} 
        onChange={(e) => setComentario(e.target.value)} 
        required
      />          
    </div>
  )
}