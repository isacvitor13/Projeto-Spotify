import ItensList from "./ItensList"
// import artists from '../../assets/database/artists'
const Main = () => {
    return (
        <div className="main">
            <ItensList title='Artistas' path='artists' />
            <ItensList title='Músicas' />
        </div>
    )
}
export default Main