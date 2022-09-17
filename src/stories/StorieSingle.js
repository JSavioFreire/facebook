import './storiesSingle.css';
import fotoMinha from '../photos/foto.jpg'



export default function StorieSingle(props){
    
    return(
        <div className='storieSingle' style={{backgroundImage :`url(${props.imagem})`}}>
            <p>{props.nome}</p>
        </div>
    )

}

