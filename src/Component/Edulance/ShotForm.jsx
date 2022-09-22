import React from "react";
import { useState } from "react";
import { FaPaperclip, FaPlus } from "react-icons/fa";

const ShotForm = () => {
  const [getFile, setGetFile] = useState(null);
  const [textareaHight, setTextareaHight] = useState(1)

  //get the file info
  const onChangeFile = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setGetFile({getFile,
        file: URL.createObjectURL(file),
      });
    }
  };

// textarea handler
  const handleChange = (event) => {
    const height = event.target.scrollHeight;
    const rows = event.target.rows;
    const rowHeight = 17;
    const tRows = Math.ceil(height/ rowHeight) - 1 ;
    if(tRows > rows){
      setTextareaHight(tRows)
    }
  }

  //  handle onSubmit
  const handleSubmit = () => {};

  return (
    <section className="shotForm">
      <form action="">
        <label htmlFor="duration">How long will it take you?</label>
        <select id="duration" className="dropdown">
          <option className="option" value="AWeek">
            7 days
          </option>
          <option className="option" value="twoWeek">
            2 weeks
          </option>
          <option className="option" value="threew">
            3 weeks
          </option>
          <option className="option" value="month">
            one month
          </option>
        </select>

        <div className="paymentMtd">
          <label htmlFor="">Payment Method</label>
          <span className="endP">
            <input type="radio" name="payment" id="" />
            At the end of the project
          </span>
          <span>
            <input type="radio" name="payment" id="" />
            After achieving a milestone
          </span>
          <div className="milestone-btn">
            <div className="inputs">
              <input type="text" name="" placeholder="Enter Milestones" id="" />
              <input type="text" name="" placeholder="&#8358; 10,000" id="" />
            </div>
            <button>
              <FaPlus /> Add Another Milestone
            </button>
          </div>
        </div>

        <div className="bargain-container">
          <label htmlFor="bargain">
            <p className="bargain-para">Bargain Price</p>
            <p>Enter new amount if you are not okay with the price</p>
          </label>
          <input type="text" id="bargain" placeholder="&#8358; 10,000" />
        </div>
        <div className="shot-message">
          <label htmlFor="shot-message">Shoot your shot</label>
          <textarea
            name=""
            id=""
            rows={textareaHight}
            placeholder="write message"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="file-container">
          <p>
            Attach files <small> (Optional)</small>
          </p>

          <label htmlFor="filedocs">
            <FaPaperclip /> Attach File
            <input
              type="file"
              name="file"
              accept=".pdf, .docx"
              id="filedocs"
              onChange={onChangeFile}
            />
          </label>
        </div>
        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </section>
  );
};

export default React.memo(ShotForm);
