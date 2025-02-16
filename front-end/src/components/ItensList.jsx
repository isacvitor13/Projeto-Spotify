import { Link } from 'react-router-dom'
import SingleItem from './SingleItem'

const ItensList = ({ title, path, itens, itensArray, idPath }) => {
    return (
        <div className='item-list'>
            <div className="item-list__header">
                <h2>{title} Populares</h2>
                <Link to={`${path}`} className='item-list__link'>
                    Mostrar todos
                </Link>
            </div>
            <div className='item-list__container'>
                {itensArray
                    .filter((currentObj, index) => index < itens)
                    .map((currentObj,index) => <SingleItem idPath={idPath} key={`${title}-${index}` } {...currentObj} />)}
            </div>
        </div>
    )
}

export default ItensList