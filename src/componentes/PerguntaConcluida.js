import Icone from "./Icones";

export default function PerguntaConcluida({
     respostaCliente,
     cor, 
     setCor, 
     botao, 
     setBotao, 
     numPergunta 
    }){

  
        switch(respostaCliente){
            case 'zap':
                setCor('verde')
                break;
                
            case 'quasenaoLembrei':
                setCor('laranja');
                break;
    
            case 'naoLembrei':
                setCor('vermelho');
                break;        
        } 
    
    
   return( 
        <button onClick={() => setBotao(!botao)} className={`pergunta concluida ${cor}`}>
        <h2>Pergunta{numPergunta}</h2>
        <Icone respostaCliente={respostaCliente}/>
        </button>
   )
}