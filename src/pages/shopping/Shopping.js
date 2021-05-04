
import { useContext } from 'react';
import { BookStoreContext } from '../../context';

import './Shopping.scss'
import BookCard from '../../components/bookcard/BookCard';



function Shopping() {

    const { books } = useContext(BookStoreContext);
    // console.log('Books from Shopping :', books);


    return (
        <div className="shopping">
            {books.map(item => <BookCard key={item.id} {...item} /> )}
        </div>
    )
}

export default Shopping
