
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { BookStoreContext } from '../../context';

import './BookCard.scss';



function BookCard({ id, image, name, type, author, price }) {
    
    const { addCartHandler } = useContext(BookStoreContext);
    
    return (
        <div className="bookCard">
            <div className="bookCard__image">
                <img src={image} alt={name }/>
            </div>
            <div className="bookCard__body">
                <p className="bookCard__body--type">{type}</p>
                <p className="bookCard__body--name">{name}</p>
                <p className="bookCard__body--author">{author}</p>
                <p className="bookCard__body--price">${price}</p>
            </div>
            <div className="bookCard__footer">
                <p onClick={() => addCartHandler(id)}>ADD TO CART</p>
                <Link to={`/`}>
                    <i className="fa fa-exchange" aria-hidden="true"></i>
                </Link>
            </div>
        </div>
    )
}

export default BookCard
