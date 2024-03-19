import NewBook from './NewBook';
import React, { useState } from 'react';

function BookList({ raamatud, setActiveBook }) {
    const pickBook = (raamatIndex) => {
        console.log('book' + raamatIndex)
        setActiveBook(raamatIndex)
    }

    const bookList = raamatud.map((raamat, index) => {
        return (
            <li key={index} onClick={() => pickBook(index)}>{raamat.title} : {raamat.readBook}</li>
        )
    })

    const addNewBook = (title, author, image) => {
        const newBook = {
          title, author, image
        }
        console.log(newBook)
      }

    return (
        <div>
            <p className='heading'>BOOK LIST</p>
            <ul className='booklist-list'>{bookList}</ul>
            <p className='heading'>ADD NEW BOOK</p>
            <div>
                <NewBook addNewBook={addNewBook} />
            </div>

        </div>
    )
}

export default BookList;
