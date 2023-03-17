import React from "react";
import { Link } from "react-router-dom";

const QuickreadCard: React.FC<{id:string,img:string,publishedDate:string,readTime:string,title:string}> = (props) => {
  const user = JSON.parse(localStorage.getItem("LoggedinUser")||"0");
  return (
    <Link
      to={user ? "/blog-post" : "/signin"}
      className="article swiper-slide"
      state={{ ...props }}
    >
      <img
        src={require(`../../images/quick_read/quick_read_${props.id}.jpg`)}
        alt=""
        className="article-image"
      />

      <div className="article-data-container">
        <div className="article-data">
          <span>{props.publishedDate}</span>
          <span className="article-data-spacer"></span>
          <span>{props.readTime}</span>
        </div>
        <h3 className="title article-title">{props.title}</h3>
      </div>
    </Link>
  );
};

export default QuickreadCard;
