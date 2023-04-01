import Header from "./components/header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
function App() {


  return (
    <div className="container mt-5">
      <Header/>
      <Formulario/>
      <ListadoPacientes/>
    </div>

  )
}

export default App
