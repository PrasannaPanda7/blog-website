import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./card.css";
import trendingBlogs from "../BlogNews/trendingNews";
import TrendingnewsCard from "./trendingnewsCard/trendingnewsCard";
import QuickreadCard from "./QuickreadCard/QuickreadCard";
import quickNews from "../BlogNews/quickNews";
const Card = () => {
  const user = JSON.parse(localStorage.getItem("LoggedinUser") || "0");

  return (
    <>
      <section className="featured-articles section-header-offset">
        <div className="featured-articles-container container d-grid">
          <div className="featured-content d-grid">
            {/* headline banner */}
            <div className="headline-banner">
              <h3 className="headline">
                <span className="place-items-center">Breaking News</span>
              </h3>
              <span className="headline-description">
                Lorem ipsum was conceived as filler text...
              </span>
            </div>
            <Link
              to={user ? "./blog-post" : "./signin"}
              className="article featured-article featured-article-1"
              state={{
                id: "2",
                title: "Is VR the future?",
                publishedDate: "Dec 5th 2021",
                readTime: "8min",
              }}
            >
              <img
                src={require("../images/featured/featured-1.jpg")}
                alt=""
                className="article-image"
              />
              <span className="article-category">Technology</span>

              <div className="article-data-container">
                <div className="article-data">
                  <span>Dec 5th 2021</span>
                  <span className="article-data-spacer"></span>
                  <span>8min</span>
                </div>

                <h3 className="title article-title">Is VR the future?</h3>
              </div>
            </Link>

            <Link
              to={user ? "./blog-post" : "./signin"}
              className="article featured-article featured-article-2"
              state={{
                id: "2",
                title: "Is VR the future?",
                publishedDate: "Jan 3rd 2023",
                readTime: "8min",
              }}
            >
              <img
                src={require("../images/featured/featured-2.jpg")}
                className="article-image"
              />
              <span className="article-category">Technology</span>
              <div className="article-data-container">
                <div className="article-data">
                  <span>Jan 3rd 2023</span>
                  <span className="article-data-spacer"></span>
                  <span>8min</span>
                </div>
                <h3 className="title article-title">Is VR is the future</h3>
              </div>
            </Link>

            <Link
              to={user ? "./blog-post" : "./signin"}
              className="article featured-article featured-article-3"
              state={{
                id: "2",
                title: "Is VR the future?",
                publishedDate: "Jan 23rd 2023",
                readTime: "8min",
              }}
            >
              <img
                src={require("../images/featured/featured-3.jpg")}
                className="article-image"
              />
              <span className="article-category">Technology</span>
              <div className="article-data-container">
                <div className="article-data">
                  <span>Jan 23rd 2023</span>
                  <span className="article-data-spacer"></span>
                  <span>8min</span>
                </div>
                <h3 className="title article-title">Is VR is the future</h3>
              </div>
            </Link>
          </div>

          {/* trending news */}

          <div className="sidebar d-grid">
            <h3 className="title featured-content-title">Trending News</h3>

            {trendingBlogs.map((trend, i) => (
              <TrendingnewsCard {...trend} key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* quickread */}

      <section className="quick-read section">
        <div className="container">
          <h2 className="title section-title" data-name="Quick read">
            Quick read
          </h2>
          <div className="swiper">
            <div className="swiper-wrapper">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                breakpoints={{
                  1200: {
                    slidesPerView: 3,
                  },
                  700: {
                    slidesPerView: 2,
                  },
                }}
              >
                {quickNews.map((news, i) => (
                  <SwiperSlide key={i}>
                    <QuickreadCard {...news} />
                  </SwiperSlide>
                ))}
                <SwiperSlide>Hello</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
