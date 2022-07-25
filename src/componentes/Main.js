import React from "react";
import Tela01 from "./Tela01";
import Tela02 from "./Tela02";

export default function Main(){

  const [clikado, setClickado] = React.useState(true) 

  return (<>{clikado ? <Tela01 estate={clikado} setClickado={setClickado}/> : <Tela02/>}</>)

}
       
  