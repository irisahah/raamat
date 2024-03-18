import raamat1 from './img/raamat1.jpg';
import raamat2 from './img/raamat2.jpg';
import raamat3 from './img/raamat3.jpg';
import Raamat from './Raamat';
import './raamat.css';
import BookList from './BookList';

/* Esialgne App
function App() {
  return (
    <div className="book">
      <header className="page-title">
         <h1>TOP BOOKS</h1>
      </header>
      <div className="book-list">
        <Raamat title="Don't Make Me Think (Revisited)" author="Steve Krug" image={raamat1} link="https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515" />
        <Raamat title="The 7 Habits of Highly Effective People" author="Stephen Covey" image={raamat2} link="https://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/1982137274" />
        <Raamat title="The Cat in the Hat" author="Dr. Seuss" image={raamat3} link="https://www.amazon.com/Cat-Hat-Dr-Seuss/dp/039480001X" />
      </div>
    </div>
  );
}
*/

const raamatud = [
  { title: "Don't Make Me Think (Revisited)", author: "Steve Krug", image: raamat1 },
  { title: "The 7 Habits of Highly Effective People", author: "Stephen Covey", image: raamat2 },
  { title: "The Cat in the Hat", author: "Dr. Seuss", image: raamat3 },
]

const addBook = () => {
  console.log('Add Book')
}

function App() {
  const [firstBook] = raamatud;

  let activeBook = 2;

  return (
    <div className="container">
      <div className="book-list">
      <BookList raamatud={raamatud} />
      </div>
      <div>
        <div className="book-details">TOP BOOKS</div>
        <button type="button" onClick={addBook}>Add Book</button>
{/*         {raamatud.map((raamat) => {
          return (
            <Raamat name={raamat.title} author={raamat.author} image={raamat.image} />
          )
        })} */}
        <Raamat 
          title={raamatud[activeBook].title} 
          author={raamatud[activeBook].author} 
          image={raamatud[activeBook].image} 
          />
      </div>

    </div>
  )
}

export default App;

