import React from "react";
import { IoIosArrowDown } from 'react-icons/io';
import Stars from "./Stars";

const PaidBooks = ({book, books}) => {
  return (
    <div className="paid">
      <div className="details_p">
        <h3 className="title">{book.title}</h3>
        <p className="author">
          by <span>{book.author}</span>
        </p>
        <Stars />
        <p className="reviews">{book.reviews}</p>
        <button className="read_more">
          Read More <IoIosArrowDown />
        </button>
      </div>
      <div className="more_details">
        <div className="genre" style={{ display: " flex", gap: ".2rem" }}>
          <span>Non fiction</span>
          <span>Biology</span>
          <span>Art</span>
          <span>Autography</span>
          <span>History</span>
        </div>
        <div>345 pages,Digital First Published july 19,1995</div>
        <div>2,500 people downloaded this book</div>
      </div>
      <div className="about_author_container">
        <div className="card">
          <img src="" alt="" />
          <span className="name">{book.author}</span>
        </div>
        <p className="about_author">
          I am looking to refresh the branding and website for a sleep-related
          DTC product in anticipation of a relaunch later this year. This
          project will include providing guidance on branding, new page
          layout/structure, conversion optimization, and more.
        </p>
        <button className="read_more">
          Read More <IoIosArrowDown />
        </button>
      </div>
      <div className="similar_books_container">
        <h3>Simlar Books</h3>
        <div className="similar_books">
          {books &&
            books.map((book) => {
              const { id, title, author, url, isFree } = book;
              return (
                id <= 5 && (
                  <div className="book" key={id}>
                    <div className="img">
                      <img src={url} alt={title} />
                    </div>
                    <div className="details">
                      <p className="title">{title.substring(0, 25)}</p>
                      <p className="author">{author}</p>
                    </div>
                    <Stars />
                    {isFree && <p className="isFree">FREE</p>}
                  </div>
                )
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PaidBooks;
