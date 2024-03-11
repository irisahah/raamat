import image from './raamat 1.png';

function Raamat() {
    return (
        <div>
            <h2>Don't Make Me Think (Revisited) by Steve Krug, 2013</h2>
            <img className="image" src={image}/>
            <p>The book is about human–computer interaction and web usability.</p>
            <p>Since Don’t Make Me Think was first published in 2000, hundreds of thousands of Web designers and developers have relied on usability guru Steve Krug’s guide to help them understand the principles of intuitive navigation and information design. Witty, commonsensical, and eminently practical, it’s one of the best-loved and most recommended books on the subject.</p>
            <p>Now Steve returns with fresh perspective to reexamine the principles that made Don’t Make Me Think a classic–with updated examples and a new chapter on mobile usability. And it’s still short, profusely illustrated…and best of all–fun to read.</p>
            <p>If you’ve read it before, you’ll rediscover what made Don’t Make Me Think so essential to Web designers and developers around the world. If you’ve never read it, you’ll see why so many people have said it should be required reading for anyone working on Web sites.</p>
            <button>View on Amazon</button>
        </div>
    )
}

export default Raamat;
