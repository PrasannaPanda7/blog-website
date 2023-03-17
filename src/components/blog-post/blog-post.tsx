import React from "react";
import "./blog-post.css";
import { useLocation } from "react-router-dom";

const BlogPost = () => {
  const location = useLocation();
  const data = { ...location.state };
  console.log(data);
  return (
    <section className="blog-post section-header-offset">
      <div className="blog-post-container container">
        <div className="blog-post-data">
          <h3 className="title blog-post-title">{data.title}</h3>
          <div className="article-data">
            <span>{data.publishedDate}</span>
            <span className="article-data-spacer"></span>
            <span>{data.readTime}</span>
          </div>
          <img src={require(`../images/trending/trending_1.jpg`)} alt="" />
        </div>
        <div className="container">
          <p>
            Lorem ipsum was conceived as filler text, formatted in a certain way
            to enable the presentation of graphic elements in documents, without
            the need for formal copy. Using Lorem Ipsum allows designers to put
            together layouts and the form of the content before the content has
            been created, giving the design and production process more
            freedom.Lorem ipsum was conceived as filler text, formatted in a
            certain way to enable the presentation of graphic elements in
            documents, without the need for formal copy. Using Lorem Ipsum
            allows designers to put together layouts and the form of the content
            before the content has been created, giving the design and
            production process more freedom.
          </p>
          <p>
            Lorem ipsum was conceived as filler text, formatted in a certain way
            to enable the presentation of graphic elements in documents, without
            the need for formal copy. Using Lorem Ipsum allows designers to put
            together layouts and the form of the content before the content has
            been created, giving the design and production process more
            freedom.Lorem ipsum was conceived as filler text, formatted in a
            certain way to enable the presentation of graphic elements in
            documents, without the need for formal copy. Using Lorem Ipsum
            allows designers to put together layouts and the form of the content
            before the content has been created, giving the design and
            production process more freedom.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
