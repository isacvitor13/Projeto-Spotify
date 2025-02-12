import spotifyLogo from '../../assets/logo/spotify-logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='header'>
            <img src={spotifyLogo} alt='Logo spotify' />
            <Link to='/' className='header__link'>
                <h1>Spotify</h1>
            </Link>
        </nav>
    )
}


export default Header