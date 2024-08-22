import { useState } from "react";

function Contador() {
  
  // const[nome estado,função_setState] = useState(valor_inicial_do_estado)
  /// estado valor React
  const[valor, setValor] = useState(0);
  //Typescypt
  function handleClick(){
    setValor(valor + 1);
  } //html + css
  
  return (
    <div>
      <h2>Componente Contador</h2>
      <p>O valor do meu estado é: {valor}</p>
      <button onClick={handleClick}>Adicionar +1</button>
      </div>
  )
}

export default Contador