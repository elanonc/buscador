import { FiSearch } from "react-icons/fi";
import './App.css';

function App() {

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="container-input">
        <input type="text" placeholder="Digite seu CEP..."/>
        
        <button className="button-search"> <FiSearch size={25} color="#000"/> </button>
      </div>

      <main className="main">
        <h2>CEP: 638000000</h2>

        <span>Rua teste algum</span>
        <span>Complemento: Algum complemento</span>
        <span>Vila Rosa</span>
        <span>Quixeramobim-CE</span>
      </main>
    </div>
  )
}

export default App
