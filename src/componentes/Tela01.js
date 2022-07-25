import React from "react"

export default function Tela01({
    estate, 
    setClickado,
    }){
        
    const [tela01, setTela01] = React.useState("tela01")

    return (
        <div className={tela01}>
            <div className="logo">
                <img src="./arquivosulteis/img/image 1.svg" />
            </div>
            <h1>ZapRecall</h1>
            <button onClick={()=> setClickado(!estate) } >Iniciar Recall!</button>
        </div>

    ) 
}
