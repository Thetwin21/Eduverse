import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import FreeBooks from "./FreeBooks";
import PaidBooks from "./PaidBooks";

const SingleBook = ({ singleBookId, setSingleBookId, books }) => {
  const backTo = () => {
    setSingleBookId("");
  };
  return (
    <div className="single_book_container">
      <div className="btn_container">
        <button onClick={backTo}>
          <IoIosArrowBack /> back{" "}
        </button>
      </div>
      {singleBookId !== "" && books[singleBookId] && (
        <div className="single_book">
          {books[singleBookId].isFree ? (
            <div className="free_container">
              <FreeBooks book={books[singleBookId]} books={books} />
              <div className="download_section">
                <img src={books[singleBookId].url} alt="" />
                <button className="download_btn">Download For Free</button>
              </div>
            </div>
          ) : (
            <div className="paid_container">
              <PaidBooks book={books[singleBookId]} books={books} />
              <div className="download_section">
                <img src={books[singleBookId].url} alt="" />
                <button className="download_btn">Buy Book N 1700</button>
                <button className="add_to_cart">Add To Cart</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SingleBook;
