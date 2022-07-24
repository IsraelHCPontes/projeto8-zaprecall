export default function Cor({respostaCliente, setCor}){
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
}
