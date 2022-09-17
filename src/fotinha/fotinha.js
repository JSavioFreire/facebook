import './fotinha.css';

export default function Fotinha(props){


    return(
        <div className='fotinha'>
             <img className='fotinha' src={props.foto}></img>
        </div>
    )
}