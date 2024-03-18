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

    return (
        <div>
            <p className='booklist-heading'>BOOK LIST</p>
            <ul className='booklist-list'>{bookList}</ul>
            <button type="button" className="button-add-book">Add Book</button>
        </div>
    )
}

export default BookList;
