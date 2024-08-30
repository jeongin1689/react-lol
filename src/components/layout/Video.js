import React from "react";
import Pentagon from "../../assets/img/pentagon_border.png";
import VideoSrc from "../../assets/videos/background_video.webm";
import VideoLogo from "../../assets/img/video_logo.png";

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

function Video(){
  return (
    <div className="main_video_wrap">
      <div className="pentagon">
        <img src={Pentagon} alt="" />
      </div>
      {VideoCont.map((e) => (
        <video
          muted
          autoPlay
          loop
          className = {e.className}
        >
          <source 
            src = {VideoSrc}
            type = {e.type}
          >
          </source>
        </video>
      ))}
      <div className="video_logo">
        <img src={VideoLogo} alt="비디오 로고" />
        <div className="join_btn">
          <button className="blue_btn">무료로 플레이하기</button>
        </div>
      </div>
    </div>
  )
}

export default Video;