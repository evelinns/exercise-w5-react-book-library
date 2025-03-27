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
    </>
  );
}

export default App;
