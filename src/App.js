import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/header/Header";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Pracsec from "./components/practicesection/Pracsec";
import Quiz from "./components/quiz/Quiz";
import Aptitude from "./components/aptitude/Aptitude";
import Compre from "./components/compre/compre";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pracsec" element={<Pracsec />} />{" "}
        <Route exact path="/pracsec/compre" element={<Compre />} />
        <Route exact path="/pracsec/aptitude" element={<Aptitude />} /> {""}
        <Route exact path="/quiz" element={<Quiz />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/courses" element={<CourseHome />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
