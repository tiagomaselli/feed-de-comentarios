import NovoConteudoForm from "./components/NovoConteudoForm"
import Conteudo from "./components/Conteudo"
import conteudoJsPrincipal from "./hooks/conteudoJsPrincipal"

export default function App() {
const { conteudo, addConteudo, removeConteudo } = conteudoJsPrincipal()

  return (
    <div id="app">
      <h1>Sessão de Comentários</h1>
      <NovoConteudoForm addConteudo={addConteudo} />
      <hr />
      <section>
        {
        conteudo.length > 0 ?
          conteudo.map((conteudo) => (
            <Conteudo 
              key={conteudo.id}
              email={conteudo.email}
              data={conteudo.data}
              hora={conteudo.hora}
              comentario={conteudo.comentario}
              onRemove={() => removeConteudo(conteudo.id)}
            />
          ))
        : (
          <div>Ainda não há comentários.</div>
        )
        }
      </section>
    </div>
  )
}

