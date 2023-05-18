import { FC, useState } from "react";
import { Book } from "./components/interfaces/Book.interface";
import BooksList from "./components/BooksList/BooksList";
import AddBookForm from "./components/AddBookForm/AddBookForm";

const booksData: Book[] = [
  {
    id: "te1314derw",
    title: "Of Mice and Men",
    author: "John Steinbeck",
    price: 25,
  },
  {
    id: "t32s14dzdw",
    title: "East of Eden",
    author: "John Steinbeck",
    price: 30,
  },
];

const App: FC = () => {
  const [books, setBooks] = useState<Book[]>(booksData);

  const addBook = (book: Book): void => {
    setBooks([...books, book]);
  };

  return (
    <div className='container'>
      <header>
        <h1>Books App</h1>
      </header>
      <BooksList books={books} />
      <AddBookForm addBook={addBook} />
    </div>
  );
};

export default App;
