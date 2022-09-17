import './fotoPostada.css'


export default function FotoPostada(props){

    return(
        <div className='fotoPostada'>
            <img src={props.foto}/>
        </div>
    )

}
