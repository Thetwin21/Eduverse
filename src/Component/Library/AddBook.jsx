import React from "react";
import DragDrop from "../../Component/Dragdrop.jsx";
import { ImCancelCircle } from "react-icons/im";

const AddBook = ({backTo}) => {
  const onSubmitHandle = (e) => {
    e.preventDefault();
  };
  return (
    <div className="add_book">
      <div className="add_book_heading">
        <h3>Add A Book</h3>
        <div className="icon" >
          <ImCancelCircle onClick={backTo}/>
        </div>
      </div>
      <form action="" onSubmit={onSubmitHandle}>
        <span className="book_title_container">
          <label htmlFor="book_title">Book Title</label>
          <input type="text" id="author" placeholder="e.g Thing Fall Apart" />
        </span>
        <span className="inputbox_for_authorName">
          <label htmlFor="author">Name Of Author </label>
          <input type="text" id="author" placeholder="e.g Chinua Achebe" />
        </span>
        <span className="inputbox_for_date">
          <label htmlFor="date">Date Published</label>
          <input type="date" name="" id="date" />
        </span>
        <span>
          <label htmlFor="book_title">Book Title</label>
          <input type="text" placeholder="e.g Thing Fall Apart" />
        </span>
        <span className="about_book_container">
          <label htmlFor="about_book">About The Book</label>
          <textarea
            name=""
            id="about_book"
            cols="30"
            rows="10"
            placeholder="Enter Description"
          ></textarea>
        </span>
        <span className="about_author_container">
          <label htmlFor="about_author">About The Author</label>
          <textarea
            name=""
            id="about_author"
            cols="30"
            rows="10"
            placeholder="Enter Description"
          ></textarea>
        </span>
        <DragDrop />
        <div className="book_free_paid">
          <label htmlFor="">Type Of Book</label>

          <span className="paid">
            <input type="radio" name="paidfree" id="paid" />
            <label htmlFor="paid">free</label>
          </span>
          <span className="free">
            <input type="radio" name="paidfree" id="free" />
            <label htmlFor="free">paid</label>
          </span>
        </div>
        <span className="book_amt">
          <label htmlFor="book_amt">Enter Amount</label>
          <input type="text" id="book_amt" placeholder="N 0.00" />
        </span>
        <div className="bookPost_btn">
          <button className="cancel" onClick={backTo}>Cancel</button>
          <button>Post</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
