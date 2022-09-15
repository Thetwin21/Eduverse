import React, { useRef, useState } from "react";
import ShBtn from "./ShBtn";
// import {}

const PostShare = () => {
  const [photos, getPhotos] = useState(null);
  const [videos, getVideos] = useState(null);
  const [eventFiles, getEventFiles] = useState(null);
  const [inputContent, setInputContent] = useState("");

  const photoRef = useRef();
  const videoRef = useRef();
  const eventRef = useRef();

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

  // when clicked

  const onClickImg = () => {
    photoRef.current.click();
    getVideos(null);
  };

  const onClickVideo = () => {
    videoRef.current.click();
    getPhotos(null);
  };
  const onClickEvent = () => {
    eventRef.current.click();
  };

  // get inputContent for post
  const onChangeContent = (e) => {
    setInputContent(e.target.value);
  };

  return (
    <section className="post_share_container">
      <section className="post_share">
        <img src="../Asset/profileImg.png" className="profile_img" alt="" />

        {photos || videos ? (
          <div className="img_preview">
            <div className="preview_nav">
              <h3>Post on your wall</h3>
            </div>
            <textarea
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
              onClickEvent={onClickEvent}
            />
            <button className="tag_friends">Tag friends</button>
            <div className="post_btn">
              <button className="cancel">cancel</button>
              <button>Post</button>
            </div>
          </div>
        ) : (
          <div className="sh_content">
            <input type="search" name="" id="" placeholder="write something" />

            <ShBtn
              onClickImg={onClickImg}
              onClickVideo={onClickVideo}
              onClickEvent={onClickEvent}
            />
          </div>
        )}
        <input
          type="file"
          name="photoFile"
          ref={photoRef}
          onChange={onGetPhoto}
          accept="image/png, image/gif, image/jpeg"
          id="file"
          style={{ display: "none" }}
        />
        <input
          type="file"
          name="videoFile"
          ref={videoRef}
          onChange={onGetVideo}
          accept="video/mp4 , video/x-mp4,video/*"
          id="file"
          style={{ display: "none" }}
        />
      </section>
    </section>
  );
};

export default React.memo(PostShare);
