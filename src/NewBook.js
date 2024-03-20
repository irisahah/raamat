import { useState } from "react";

function NewBook({addNewBook}) {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [image, setImage] = useState('')

    const addBook = () => {
        console.log(title)
        console.log(author)
        console.log(image)
        addNewBook(title, author, image)
    }

    return (
        <div className='row'>
            <input
                className='newBook-field'
                placeholder='Title'
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <input
                className='newBook-field'
                placeholder='Author'
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
            />
            <input
                className='newBook-field'
                placeholder='Image URL'
                value={image}
                onChange={(event) => setImage(event.target.value)}
            />
            <button type="button" className="button-add-book"
            onClick={addBook}>Add Book</button>
        </div>
    )
}

export default NewBook;