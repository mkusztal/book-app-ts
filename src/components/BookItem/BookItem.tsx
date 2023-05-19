import { FC } from "react";
import { Book } from "../interfaces/Book.interface";
import "./BookItem.css";

type TProps = {
  book: Book;
  removeBook: (book: Book) => void;
};

const BookItem: FC<TProps> = ({ book, removeBook }) => {
  return (
    <li className='book-item' key={book.id}>
      {book.title} by {book.author}, ${book.price}
      <button onClick={() => removeBook(book)}>Remove</button>
    </li>
  );
};

export default BookItem;
