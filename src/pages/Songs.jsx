import ItensList from "../components/ItensList"
import { songsArray } from "../../assets/database/songs"
const Songs = () => {
    return (
        <div className="main">
            <ItensList
                title='Músicas'
                path='/songs'
                itens={songsArray.length}
                idPath='/song'
                itensArray={songsArray} />
        </div>
    )
}

export default Songs