import ItensList from "./ItensList.jsx"
import { artistArray } from '../../assets/database/artists.js'
import { songsArray } from '../../assets/database/songs.js'
const Main = () => {
    return (
        <div className="main">
            <ItensList
                title='Artistas'
                path='/artists'
                idPath='/artist'
                itens={5}
                itensArray={artistArray} />


            <ItensList
                title='Músicas'
                path='/songs'
                itens={10}
                idPath='/song'
                itensArray={songsArray} />
        </div>
    )
}
export default Main