import './App.css'
import Contador from './pages/contador/Contador'
import Home from './pages/home/Home'
import Tarefa from './pages/tarefa/Tarefa'

function App() {

 // const[nome estado,função_setState] = useState(valor_inicial_do_estado)

  return (
    <>
        <Home
        titulo ="Minha primeira postagem"
        texto = "texto da minha primeira postagem" />
        
        <Home
        titulo ="Minha segunda postagem"
        texto = "texto da minha segunda postagem" />
        <Contador/>
        <Tarefa/>
    </>
  )
}

export default App
