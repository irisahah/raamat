import NewBook from './NewBook';
import React from 'react';

function BookList({ raamatud, setActiveBook, addNewBook }) {
    const pickBook = (raamatIndex) => {
        console.log('book' + raamatIndex);
        setActiveBook(raamatIndex);
    };

    const bookList = raamatud.map((raamat, index) => {
        return (
            <li key={index} onClick={() => pickBook(index)}>{raamat.title} : {raamat.readBook}</li>
        );
    });

    return (
        <div>
            <p className='heading'>BOOK LIST</p>
            <ul className='booklist-list'>{bookList}</ul>
            <p className='heading'>ADD NEW BOOK</p>
            <div>
                <NewBook addNewBook={addNewBook} />
            </div>
        </div>
    );
}

export default BookList;
