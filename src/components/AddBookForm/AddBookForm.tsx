import { FC, useState, FormEvent } from "react";
import "./AddBookForm.css";
import { randomID } from "../utils/randomID";
import { Book } from "../interfaces/Book.interface";

type TProps = {
  addBook: (book: Book) => void;
};

const AddBookForm: FC<TProps> = ({ addBook }) => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const book: Book = {
      id: randomID(10),
      title: title,
      author: author,
      price: price,
    };
    addBook(book);
    setTitle("");
    setAuthor("");
    setPrice(0);
  };

  return (
    <form className='add-book-form' onSubmit={handleSubmit}>
      Title:{" "}
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      Author:{" "}
      <input
        type='text'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      Price:{" "}
      <input
        type='number'
        value={price}
        onChange={(e) => setPrice(parseInt(e.target.value))}
      />
      <button>Add button</button>
    </form>
  );
};

export default AddBookForm;
