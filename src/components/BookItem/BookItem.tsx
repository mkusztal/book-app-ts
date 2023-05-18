import { FC } from "react";
import { Book } from "../interfaces/Book.interface";
import "./BookItem.css";

type TProps = {
  book: Book;
  deleteBook: (book: Book) => void;
};

const BookItem: FC<TProps> = ({ book, deleteBook }) => {
  return (
    <li className='book-item' key={book.id}>
      {book.title} by {book.author}, ${book.price}
      <button onClick={() => deleteBook(book)}>Remove</button>
    </li>
  );
};

export default BookItem;
