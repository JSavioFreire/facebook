import './postSingle.css';
import {FiMoreHorizontal} from "react-icons/fi";
import {BiWorld, BiLike, BiMessageAlt} from "react-icons/bi";
import {RiShareForwardLine} from "react-icons/ri"
import {MdTagFaces} from "react-icons/md"
import Fotinha from '../fotinha/fotinha';
import FotoPostada from './fotoPostada';
import { useState } from 'react';




export default function PostSingle(props){

    const nLikes = parseInt(props.likes)
    const[likesQuant, setLikes] = useState(nLikes)

    
  


    return(
        <div className='postSingle'>
            <div className='flex'>
                <Fotinha foto = {props.fotopostada}/>
                <div className='right'>
                    <div className='cima'>
                        <h1>{props.nome}</h1>
                        <div className='horario'>
                            <p>{props.tempo}</p>
                            <BiWorld/>
                        </div>
                    </div>
                    <div className='more'>
                        <FiMoreHorizontal/>
                    </div>
                </div>
            </div>
            <div className='sobre'>
                <p>{props.sobre}</p>
            </div>
            <div className='foto'>
                <FotoPostada foto = {props.fotopostada}/>
            </div>

            <div className='baixo'>
                <div className='quant'>
                    <BiLike/>
                    <MdTagFaces/>
                    <p>{likesQuant}</p>
                </div>
                <div className='comentShare'>
                    <p>{props.comentarios} comentários • {props.compartilhamentos} compartilhamentos</p>
                </div>
            </div>

            <div className='areaBottom'>
                <div className='giveLike' onClick={()=> setLikes(likesQuant + 1)}>
                    <BiLike/>
                    <span>Curtir</span>
                </div>
                <div>
                    <BiMessageAlt/>
                    <span>Comentar</span>
                </div>
                <div>
                    <RiShareForwardLine/>
                    <span>Compartilhar</span>
                </div>
            </div>
        </div>
    )


}