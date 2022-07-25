import React from "react";
import Tela01 from "./Tela01";
import Tela02 from "./Tela02";

export default function Main(){
  DadosDeckJSX.sort(() => Math.random() - 0.5)
  
  const [clikado, setClickado] = React.useState(true) 

  return (<>{clikado ? <Tela01 estate={clikado} setClickado={setClickado}/> : <Tela02/>}</>)

}
       
  
