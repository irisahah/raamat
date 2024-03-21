function Raamat({ title, author, image, readBook, setReadBook, link }) {
    if (!title) {
        title = 'Unknown'
    }
    if (!author) {
        author = 'Unknown';
    }

    const add = () => {
        setReadBook(readBook + 1)
    }
    const subtract = () => {
        setReadBook(readBook - 1)
    }

    return (
        <div className="book">
            <div><img src={image} className="book-image" alt="Book" />
            </div>
            <div className="book-title">
                <h2>Title: {title}</h2>
                <h3 className="book-author">Author: {author}</h3>
            </div>
            <div>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <button className="buttonAmazon">View on Amazon</button>
                </a>
            </div>
            <div>
                <button className="buttonPlus" onClick={add}>+</button>
                {readBook}
                <button className="buttonMinus" onClick={subtract}>-</button>
            </div>
        </div>
    );
}

export default Raamat;
