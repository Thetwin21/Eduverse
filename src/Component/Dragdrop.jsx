import React, { useRef, useState } from "react";
import { MdImage } from "react-icons/md";

// drag drop file component
const DragDrop = () => {
  // drag state
  const [dragActive, setDragActive] = useState(false);
  // ref
  const inputRef = useRef(null);
  const [files, handleFiles] = useState(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();

    setDragActive(true);
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    console.log("File dropped");
    // Prevent default behavior (Prevent file from being opened)
    e.preventDefault();
    const myFiles = [];
    if (e.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...e.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          console.log(`… file[${i}].name = ${file.name}`);
          myFiles.push(file);
          console.log(myFiles);
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...e.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file}`);
        console.log(myFiles);
        myFiles.push(file);
      });
    }
    handleFiles(myFiles);
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div
      id="form-file-upload"
      onDrop={handleDrop}
      onDragOver={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={inputRef}
        type="file"
        id="input-file-upload"
        multiple={true}
        onChange={handleChange}
      />
      <label
        id="label-file-upload"
        htmlFor="input-file-upload"
        className={dragActive ? "drag-active" : ""}
      >
        <MdImage />
        <div>
          <button className="upload-button" onClick={onButtonClick}>
            click
          </button>
          <p> or drag to upload event poster</p>
        </div>
      </label>
      {dragActive && (
        <div id="drag-file-element">
          {files && (
            <img src={URL.createObjectURL(files[0])} alt="" className="files" />
          )}
        </div>
      )}
    </div>
  );
};
export default DragDrop;
