import React, { useState } from 'react';
import Raamat from './Raamat';
import './raamat.css';
import BookList from './BookList';
import raamat1 from './img/raamat1.jpg';
import raamat2 from './img/raamat2.jpg';
import raamat3 from './img/raamat3.jpg';
import defaultImage from './img/new-book-img.png';

function App() {
  const [raamatud, setRaamatud] = useState([
    { title: "Don't Make Me Think (Revisited)", author: "Steve Krug", image: raamat1, link: "https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515", readBook: 0 },
    { title: "The 7 Habits of Highly Effective People", author: "Stephen Covey", image: raamat2, link: "https://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/1982137274", readBook: 0 },
    { title: "The Cat in the Hat", author: "Dr. Seuss", image: raamat3, link: "https://www.amazon.com/Cat-Hat-Dr-Seuss/dp/039480001X", readBook: 0 },
  ]);

  const [activeBook, setActiveBook] = useState(0);

  const addNewBook = (title, author, image) => {
    const imageToUse = image || defaultImage;
    const newBook = { title, author, image: imageToUse, readBook: 0, link: "https://www.amazon.com/" };
    setRaamatud([...raamatud, newBook]);
  };

  return (
    <div className="container">
      <div className="book-list">
        <BookList raamatud={raamatud} setActiveBook={setActiveBook} addNewBook={addNewBook} />
      </div>
      <div className="book-details">
        <div className="heading">TOP BOOKS</div>
        <Raamat
          title={raamatud[activeBook].title}
          author={raamatud[activeBook].author}
          image={raamatud[activeBook].image}
          link={raamatud[activeBook].link}
          readBook={raamatud[activeBook].readBook}
          setReadBook={(newReadBook) => {
            const updatedRaamatud = [...raamatud];
            updatedRaamatud[activeBook].readBook = newReadBook;
            setRaamatud(updatedRaamatud);
          }}
        />
      </div>
    </div>
  );
}

export default App;
