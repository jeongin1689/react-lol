import React from "react";

const ArticleCont = [
  {
    src : "../../assets/img/nekko.jpg",
    
  },
]

function Article(){
  return (
    <div className="article_bg">
      <div className="main_sub_title_area">
        <div className="main_sub_title_box">
          <p>주목할 만한 소식</p>
        </div>
      </div>
      <div className="article_area">
        <div className="article_box">
          <div className="article_list">
            <article></article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article;