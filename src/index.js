import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 2,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91xUsdujK3L._AC_UL604_SR604,400_.jpg",
    title:
      "Cat Kid Comic Club: On Purpose: A Graphic Novel (Cat Kid Comic Club #3): ",
    author: "Dav Pilkey",
  },
  {
    id: 3,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/613KCs7szvL._AC_UL604_SR604,400_.jpg",
    title: "Ugly Love: A Novel ",
    author: "Colleen Hoover",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
      {/* <Book
        img={firstBook.image}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.image}
        title={secondBook.title}
        author={secondBook.author}
      /> */}
    </section>
  );
}

const Book = (image, title, author) => {
  // const { image, title, author } = props;
  return (
    <article className="book">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
