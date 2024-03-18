import { useState } from 'react'

function Raamat(props) {
    const handleButtonClick = () => {
        window.open(props.link, '_blank');
    };

    const [readBook, setReadBook] = useState(0)
    const add = () => {
        setReadBook(readBook + 1)
    }
    const subtract = () => {
        setReadBook(readBook - 1)
    }

    return (
        <div className="book">
            <div><img src={props.image} className="book-image" alt="Book" />
            </div>
            <div className="book-title">
                <h2>Title: {props.title}</h2>
                <h3 className="book-author">Author: {props.author}</h3>
            </div>
            <div>
                <button className="buttonAmazon" onClick={handleButtonClick}>View on Amazon</button>
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
