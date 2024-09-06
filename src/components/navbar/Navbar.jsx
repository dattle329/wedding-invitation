import './Navbar.css'
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Navbar(){
    return(
        <div className="navbar-container">
            <h1>
                <span>D</span>
                <FavoriteIcon />
                <span>L</span>
            </h1>
            <ul>
                <li>Our history</li>
                <li>Gallery</li>
                <li>Wedding location</li>
                <li>Send money to us</li>
            </ul>
        </div>
    )
}