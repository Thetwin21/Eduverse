import React from "react";
import Stars from "./Stars";

const Books = ({setSingleBookId,books}) => {

  return (
    <div className="books">
      {books &&
        books.map((book) => {
          const { id, title, author, url,isFree } = book;
          return (
            <div className="book" key={id} onClick={()=>setSingleBookId(id)}>
              <div className="img">
              <img src={url} alt={title} />
              </div>
              <div className="details">
                <p className="title">{title.substring(0,25)}</p>
                <p className="author">{author}</p>
              </div>
              <Stars />
              {isFree && <p className="isFree">FREE</p>}
            </div>
          );
        })}
    </div>
  );
};

export default Books;
