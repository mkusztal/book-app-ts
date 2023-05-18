import React, { FC } from "react";
import { Book } from "../interfaces/Book.interface";
import BookItem from "../BookItem/BookItem";
import "./BooksList.css";

type Props = {
  books: Book[];
  deleteBook: (book: Book) => void;
};

const BooksList: FC<Props> = ({ books, deleteBook }) => {
  return (
    <ul className='books-list'>
      {books.map((book: Book) => (
        <BookItem key={book.id} book={book} deleteBook={deleteBook} />
      ))}
    </ul>
  );
};

export default BooksList;
