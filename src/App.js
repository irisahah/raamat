import image1 from './img/raamat1.jpg';
import image2 from './img/raamat2.jpg';
import image3 from './img/raamat3.jpg';
import Raamat from './Raamat';
import './raamat.css';

function App() {
  return (
    <div className="book">
      <header className="page-title">
         <h1>TOP BOOKS</h1>
      </header>
      <div className="book-list">
        <Raamat title="Don't Make Me Think (Revisited)" author="Steve Krug" image={image1} link="https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515" />
        <Raamat title="The 7 Habits of Highly Effective People" author="Stephen Covey" image={image2} link="https://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/1982137274" />
        <Raamat title="The Cat in the Hat" author="Dr. Seuss" image={image3} link="https://www.amazon.com/Cat-Hat-Dr-Seuss/dp/039480001X" />
      </div>
    </div>
  );
}

export default App;
