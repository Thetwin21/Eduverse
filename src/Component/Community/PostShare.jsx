import React, { useRef, useState } from "react";
// import { useDispatch } from "react-redux";
// import { nanoid } from "@reduxjs/toolkit";
// import { postPosts } from "../../features/community/compostSlice";
import ShBtn from "./ShBtn";

const PostShare = ({ handleIsEvent }) => {
  const [textareaHight, setTextareaHight] = useState(7);

  // const dispatch = useDispatch();
  const [photos, getPhotos] = useState(null);
  const [videos, getVideos] = useState(null);
  const [inputContent, setInputContent] = useState("");

  const photoRef = useRef();
  const videoRef = useRef();

  // get image file
  const onGetPhoto = (event) => {
    if (event.target.files && event.target.files[0]) {
      const photoFile = event.target.files[0];
      getPhotos({ photos, photo: URL.createObjectURL(photoFile) });
    }
  };
  //get photo file
  const onGetVideo = (event) => {
    if (event.target.files && event.target.files[0]) {
      const videoFile = event.target.files[0];
      getVideos({ videos, video: URL.createObjectURL(videoFile) });
    }
  };

  // when image icon is clicked
  const onClickImg = () => {
    photoRef.current.click();
    getVideos(null);
  };
  // when video icon is clicked
  const onClickVideo = () => {
    videoRef.current.click();
    getPhotos(null);
  };


  // get inputContent for post
  const onChangeContent = (event) => {
    const height = event.target.scrollHeight;
    const rows = event.target.rows;
    const rowHeight = 17;
    const tRows = Math.ceil(height / rowHeight) - 1;
    if (tRows > rows) {
      setTextareaHight(tRows);
    }
    setInputContent(event.target.value);
  };

  // cancel posting
  const cancelPost = () => {
    getPhotos(null);
    getVideos(null);
  };

  // onSavePost => post pushed to the database
  // const onSavePost = () => {
  //   if (inputContent || photos || videos) {
  //     dispatch(
  //       postPosts({
  //         id: nanoid,
  //         inputContent,
  //         photos,
  //         videos,
  //       })
  //     );
  //   }
  // };
  return (
    <section className="post_share_container">
      {photos || videos ? (
        <div className="post_preview">
          <div className="preview_nav">
            <h3>Post on your wall</h3>
          </div>
          <textarea
            rows={textareaHight}
            value={inputContent}
            id=""
            onChange={onChangeContent}
            placeholder="Write something"
          ></textarea>
          {videos ? (
            <video controls width="90%">
              <source src={videos.video} type="video/mp4" width="100%" />
              Your browser does not suppoort
            </video>
          ) : (
            <img src={photos.photo} alt="" />
          )}
          <ShBtn
            onClickImg={onClickImg}
            onClickVideo={onClickVideo}
            onClickEvent={ handleIsEvent}
          />
          <button className="tag_friends">Tag friends</button>
          <div className="post_btn">
            <button className="cancel" onClick={cancelPost}>
              cancel
            </button>
            <button>Post</button>
          </div>
        </div>
      ) : (
        <section className="post_share">
          <img src="../Asset/profileImg.png" className="profile_img" alt="" />

          <div className="sh_content">
            <input type="search" name="" id="" placeholder="write something" />

            <ShBtn
              onClickImg={onClickImg}
              onClickVideo={onClickVideo}
              onClickEvent={ handleIsEvent }
            />
          </div>
        </section>
      )}

      {/* input file for image */}
      <input
        type="file"
        name="photoFile"
        ref={photoRef}
        onChange={onGetPhoto}
        accept="image/png, image/gif, image/jpeg"
        multiple={true}
        id="file"
        style={{ display: "none" }}
      />
      {/* input file for video */}
      <input
        type="file"
        name="videoFile"
        ref={videoRef}
        onChange={onGetVideo}
        accept="video/mp4 , video/x-mp4,video/*"
        multiple={true}
        id="file"
        style={{ display: "none" }}
      />
    </section>
  );
};

export default React.memo(PostShare);
