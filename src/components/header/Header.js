import { Link } from 'react-router-dom';
import './Header.scss';



function Header() {

    return (
        <nav>
            <img src="/images/logo.jpeg" alt="logo" className="nav__logo" />

            <div className="nav__menu">
                <Link to="/">Home</Link>
                <Link to="/shopping">Shopping</Link>
            </div>
            
            <div className="nav__search">
                <label htmlFor="books">
                    <input type="text" id="books" placeholder="Search Books..." />
                    <i className="fa fa-search search-icon" />
                </label>
            </div>
        </nav>
    )
}

export default Header