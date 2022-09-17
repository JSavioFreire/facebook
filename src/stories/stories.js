import './stories.css';
import StorieSingle from './StorieSingle.js';
import fotoMinha from '../photos/foto.jpg';
import ana from '../photos/wife.jpg';
import michele from '../photos/michele.jpg';
import millena from '../photos/millena.jpg';
import savio from '../photos/savio.jpg';

export default function Stories(){

    return(
        <div className='stories'>

                <div><StorieSingle nome = 'Sávio Freire' imagem = {fotoMinha} /></div>
                <div><StorieSingle nome = 'Ana Paula' imagem = {ana} /></div>
                <div><StorieSingle nome = 'Sávio Freire' imagem = {savio}  /></div>
                <div><StorieSingle nome = 'Millena Freire' imagem = {millena}/></div>
                <div><StorieSingle nome = 'Michele Freire' imagem = {michele} /></div>

        </div>
    )




}