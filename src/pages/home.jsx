import Nota from '../components/nota'
import Header from '../components/header'
import '../styles/home.css'

export default function Home(){
  return (
    <>
      <Header></Header>
      <div className='notas'>

        <Nota
        titulo="PÁGINA DO CESINHA: LÍNGUA INGLESA"
        subtitulo='NOTAS, APOSTILAS E PROJETOS DE INGLÊS'
        links = {[
          {url:'/1ano',label:'1°ano'},
          {url:'https://paginadocesinha.my.canva.site/#inicio',label:'2°ano'},
          {url:'https://paginadocesinha.my.canva.site/#inicio',label:'3°ano'},

        ]}
        />

        <Nota
        titulo="TÍTULO"
        subtitulo='SUBTÍTULO'
        links = {[
          {url:'https://paginadocesinha.my.canva.site/#inicio',label:'1°ano'},
          {url:'https://paginadocesinha.my.canva.site/#inicio',label:'2°ano'},
          {url:'https://paginadocesinha.my.canva.site/#inicio',label:'3°ano'},

        ]}
        />

        <Nota
        titulo="PÁGINA DO CESINHA: LÍNGUA INGLESA"
        subtitulo='NOTAS, APOSTILAS E PROJETOS DE INGLÊS'
        links = {[
          {url:'https://paginadocesinha.my.canva.site/#inicio',label:'1°ano'},
          {url:'https://paginadocesinha.my.canva.site/#inicio',label:'2°ano'},
          {url:'https://paginadocesinha.my.canva.site/#inicio',label:'3°ano'},

        ]}
        />

      </div>
    </>
  )
}