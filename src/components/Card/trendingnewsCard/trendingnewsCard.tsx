import React from "react";
import { Link } from "react-router-dom";
type TrendingnewsCardProps = {
  id: any;
  img: any;
  publishedDate: string;
  readTime: string;
  title: string;
};

const TrendingnewsCard = (props: TrendingnewsCardProps) => {
  const user = JSON.parse(localStorage.getItem("LoggedinUser") || "0");

  return (
    <Link
      to={user ? "/blog-post" : "/signin"}
      className="trending-news-box"
      state={{ ...props }}
    >
      <div className="trending-news-image-box">
        <span className="trending-number place-items-center">{props.id}</span>

        <img
          // src={require(`/home/prasanna/Desktop/ts-project/src/components/images/trending/trending_${props.id}.jpg`)}
          src={require(`../../images/trending/trending_${props.id}.jpg`)}
          alt=""
          className="article-image"
        />
      </div>

      <div className="trending-news-data">
        <div className="article-data">
          <span>{props.publishedDate}</span>
          <span className="article-data-spacer"></span>
          <span>{props.readTime}</span>
        </div>
        <h3 className="title featured-content-title">
          Sample article {props.title}
        </h3>
      </div>
    </Link>
  );
};

export default TrendingnewsCard;
