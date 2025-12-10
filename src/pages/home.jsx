import Nota from '../components/nota'

export default function Home(){
  return (
    <div>

      <Nota
      titulo="AULA 01"
      subtitulo='Aulinha legal'
      paragrafo="aula"
      links = {[
        {url:'https://paginadocesinha.my.canva.site/#inicio',label:'Site antigo'},
        {url:'https://paginadocesinha.my.canva.site/#inicio',label:'Site antigo'},
      ]}
      />

      <Nota/>

      <Nota/>

    </div>
  )
}