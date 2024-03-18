const pickBook = () => { 
    console.log()
}

function BookList({raamatud}) {
    const bookList = raamatud.map((raamat) => {
        return (
            <li onClick= {pickBook}>{raamat.title}</li>
        )
    })

    return (
        <div>
            <p className='booklist-heading'>BOOK LIST</p>
            <ul>{bookList}</ul>
        </div>
    )
}

export default BookList;