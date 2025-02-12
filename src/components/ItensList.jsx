import { Link } from 'react-router-dom'
import SingleItem from './SingleItem'

const ItensList = ({ title, path }) => {
    return (
        <div className='itens-list'>
            <div className="itens-list__header">
                <h2>{title} Populares</h2>
                <Link to={`/${path}`} className='itens-list__link'>
                    Mostrar todos
                </Link>
            </div>
            <div className='item-list__container'>
                <SingleItem />
                <SingleItem />
                <SingleItem />
            </div>
        </div>
    )
}

export default ItensList