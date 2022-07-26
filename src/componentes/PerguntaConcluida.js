import Icone from "./Icones";

export default function PerguntaConcluida({
     respostaCliente,
     cor, 
     setCor, 
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
        <button className={`pergunta concluida ${cor}`}>
        <h2>Pergunta{numPergunta}</h2>
        <Icone respostaCliente={respostaCliente}/>
        </button>
   )
}