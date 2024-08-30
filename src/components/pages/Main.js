import React from "react";
import Header from "../layout/Header";
import Pentagon from "../../assets/img/pentagon_border.png";
import Video from "../../assets/videos/background_video.webm";

const VideoCont = [
  {
    className : "background_video",
    type : "video/webm"
  }, 
  {
    className : "center_video",
    type : "video/webm"
  },
]


function Main(){
  return (
    <>
      <Header />
      <div className="main_video_wrap">
        <div className="pentagon">
          <img src={Pentagon} alt="" />
        </div>
        {VideoCont.map((e) => (
          <video
            muted
            autoPlay
            loop
          >
            <source 
              className = {e.className}
              src = {Video}
              type = {e.type}
            >
            </source>
          </video>
        ))}
      </div>
    </>
  )
}

export default Main;