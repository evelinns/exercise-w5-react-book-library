import data from "../data.json";
import { Author } from "./Author";
import { BookInfo } from "./BookInfo";
import { CoverImage } from "./CoverImage"
import { Title } from "./Title";

export const Book = () => {
 const {books} = data;

 return (<div className="container">
   {books.map((book) => (
    <>
    <div className="book-card">
      <CoverImage image={book.image} title={book.title} />
      <Title title={book.title} />
      <Author author={book.author} />
      <BookInfo year={book.year} genre={book.genre} rating={book.rating} description={book.description} />
    </div>
    </>
   ))}
 </div>);
}