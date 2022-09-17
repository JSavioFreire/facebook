import './feed.css'
import { RiLiveFill,RiImage2Fill } from "react-icons/ri";
import { MdTagFaces } from "react-icons/md";
import Fotinha from '../fotinha/fotinha.js'
import minhaFoto from '../photos/foto.jpg'

export default function Feed(){


    return(
        <div className="feed">
           <div className='cima'>
                <Fotinha foto = {minhaFoto}/>
                <input type='text' placeholder='No que você está pensando, Sávio?'/>
            </div>
            <div className='share'>
                <div className='live'>
                    <RiLiveFill/>
                    <p>Video ao vivo</p>
                </div>
                <div className='img'>
                    <RiImage2Fill/>
                    <p>Foto/video</p>
                </div>
                <div className='emoji'>
                    <MdTagFaces/>
                    <p>Sentimento/atividade</p>
                </div>
            </div>
        </div>

    )
}