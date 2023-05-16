import { FC } from "react";
import { Book } from "../interfaces/Book.interface";

type TProps = {
  book: Book;
};

const BookItem: FC<TProps> = ({ book }) => {
  return (
    <li key={book.id}>
      {book.title} by {book.author}, ${book.price}
    </li>
  );
};

export default BookItem;
