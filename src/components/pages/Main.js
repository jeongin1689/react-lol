import React from "react";
import Header from "../layout/Header";
import Video from "../layout/Video"; 
import Article from "../layout/Article"; 

function Main(){
  return (
    <div className="container">
      <Header />
      <Video />
      <div className="main_article_wrap">
        
      </div>
    </div>
  )
}

export default Main;