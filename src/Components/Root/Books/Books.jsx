import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [allBooks,setBooks] = useState([]);
    useEffect(()=>{
        fetch('./booksData.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))

    },[]);
    return (
        <div className="mb-8 mt-5">
            <h2 className='text-4xl text-center font-bold mb-6'>Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
                {
                    allBooks.map(item=><Book item={item} key={item.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;