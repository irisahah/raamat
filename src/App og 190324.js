import React, { useState } from 'react';
import Raamat from './Raamat';
import './raamat.css';
import BookList from './BookList';
import raamat1 from './img/raamat1.jpg';
import raamat2 from './img/raamat2.jpg';
import raamat3 from './img/raamat3.jpg';



function App() {
  const [readBookRaamat1, setReadBookRaamat1] = useState(0);
  const [readBookRaamat2, setReadBookRaamat2] = useState(0);
  const [readBookRaamat3, setReadBookRaamat3] = useState(0);

  const raamatud = [
    { title: "Don't Make Me Think (Revisited)", author: "Steve Krug", image: raamat1, link: "https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515",  readBook: readBookRaamat1, setReadBook: setReadBookRaamat1},
    { title: "The 7 Habits of Highly Effective People", author: "Stephen Covey", image: raamat2, link: "https://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/1982137274", readBook: readBookRaamat2, setReadBook: setReadBookRaamat2 },
    { title: "The Cat in the Hat", author: "Dr. Seuss", image: raamat3, link: "https://www.amazon.com/Cat-Hat-Dr-Seuss/dp/039480001X", readBook: readBookRaamat3, setReadBook: setReadBookRaamat3 },
  ]

  const [activeBook, setActiveBook] = useState(0);


  return (
    <div className="container">
      <div className="book-list">
        <BookList raamatud={raamatud} setActiveBook={setActiveBook} />
      </div>
      <div className="book-details">
        <div className="book-details-heading">TOP BOOKS</div>
        <Raamat
          title={raamatud[activeBook].title}
          author={raamatud[activeBook].author}
          image={raamatud[activeBook].image}
          link={raamatud[activeBook].link}
          readBook={raamatud[activeBook].readBook}
          setReadBook={raamatud[activeBook].setReadBook}
        />
      </div>
    </div>

  )
}

export default App;
