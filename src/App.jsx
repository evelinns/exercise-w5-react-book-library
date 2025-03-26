import "./App.css";
import { Header } from "./components/Header";
import data from "./data.json";
import { Book } from "./components/Book"

function App() {
  const { books } = data;
  console.log(books);

  return (
    <>
      <Header />
      <Book />
      {/* <div>{books.map((book) => <p>{book.title}</p>)}</div> */}
    </>
  );
}

export default App;
