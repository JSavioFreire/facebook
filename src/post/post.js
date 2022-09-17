import PostSingle from './postSingle';

import fotoMinha from '../photos/foto.jpg';
import ana from '../photos/wife.jpg';
import michele from '../photos/michele.jpg';
import millena from '../photos/millena.jpg';
import savio from '../photos/savio.jpg';


export default function Post (){

    

    return(
        <div className='post'>
            <PostSingle fotopostada = {ana} nome = 'Ana Paula Gomes Freire' tempo = '30 minutos' sobre='Eu e meu marido amado' likes ='186' comentarios = '16' compartilhamentos = '152'/>
            <PostSingle fotopostada = {michele} nome = 'Michele Freire' tempo = '1h' sobre='Eu sou a Michele Ramos Freire de Jesus hihihi.' likes ='86' comentarios = '7' compartilhamentos = '45'/>
            <PostSingle fotopostada = {savio} nome = 'Sávio Freire' tempo = '2h' sobre='Sávio pai com os filhos.' likes ='98' comentarios = '106' compartilhamentos = '70'/>
            <PostSingle fotopostada = {fotoMinha} nome = 'Sávio Freire' tempo = '3h' sobre='Esse sou eu, Sávitinho, e eu criei esse facebook para ficar no lugar do facebook já que eu não tenho facebook, coisa boa.' likes ='86' comentarios = '56' compartilhamentos = '45'/>
            <PostSingle fotopostada = {millena} nome = 'Millena Freire' tempo = '5h' sobre='Eu sou Millena e é isso ai.' likes = '54' comentarios = '26' compartilhamentos = '50'/>
        </div>
    )

}
