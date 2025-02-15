import ItensList from './ItensList'
import { artistArray } from '../../assets/database/artists'
const Artists = () => {
    return (
        <div className='main'>
            <ItensList title='Artistas' itensArray={artistArray} itens={artistArray.length} path='/artists' idPath='/artist' />
        </div>
    )
}

export default Artists