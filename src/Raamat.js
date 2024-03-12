function Raamat(props) {
    const handleButtonClick = () => {
        window.open(props.link, '_blank');
    };

    return (
        <div className="book">
            <img src={props.image} className="book-image" alt="Book" />
            <div className="book-title">
                <h2>Title: {props.title}</h2>
                <h3 className="book-author">Author: {props.author}</h3>
            </div>
            <div>
                <button className="button" onClick={handleButtonClick}>View on Amazon</button>
            </div>
        </div>
    );
}

export default Raamat;
