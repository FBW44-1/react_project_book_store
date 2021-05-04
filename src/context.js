
import { useState, useEffect, createContext } from 'react';
import axios from 'axios';


export const BookStoreContext = createContext();




export function BookStoreProvider({children}) {

    const [books, setBooks] = useState([]);

    const addCartHandler = (ID) => {
        console.log('Book ID : ', ID)
    }

    useEffect(() => {
        axios.get('http://localhost:8080/books')
            .then(res => {
                // console.log(res.data);
                setBooks(res.data)
            })
    }, [])


    return (
        <BookStoreContext.Provider value={{books, addCartHandler}}>
            {children}
        </BookStoreContext.Provider>
    )

}