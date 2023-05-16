import { FC } from "react";
import { Book } from "../interfaces/Book.interface";
import "./BookItem.css";

type TProps = {
  book: Book;
};

const BookItem: FC<TProps> = ({ book }) => {
  return (
    <li className='book-item' key={book.id}>
      {book.title} by {book.author}, ${book.price}
    </li>
  );
};

export default BookItem;
