function Raamat(props) {
    return (
        <div className="book">
            <img src={props.image} className="book-image" />
            <div className="book-title">
                <p><h2>Title: {props.title}</h2></p>
                <p className="book-author"><h3>Author: {props.author}</h3></p>
            </div>
        </div>
    )
}

export default Raamat;
