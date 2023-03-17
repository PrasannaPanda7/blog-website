import "./App.css";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/Card/card";
import Signin from "./components/signin/Signin";
import Signup from "./components/signin/Signup";
// import Search from "./components/Search/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPost from "./components/blog-post/blog-post";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Card />} />
        <Route path="/blog-post" element={<BlogPost />} />
        {/* <Route path="/search" element={<Search />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
