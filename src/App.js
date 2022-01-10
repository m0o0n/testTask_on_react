/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import { Route, Routes } from "react-router-dom";

import { fetchPost } from "./Redux/ContentReducer.ts";

import { connect } from "react-redux";

import Footer from "./Components/Footer/Footer.tsx";
import Article from "./Components/Article/Article.tsx";
import Home from "./Components/Home/Home.tsx";
import Header from "./Components/Header/Header.tsx";
// import { compose } from 'redux';
// import RedirectHoc from './HOC/RedirectHoc';

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Article" element={<Article />}>
          <Route path=":id" element={<Article />} />
          <Route path="*" element={<Article />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
export default connect(mapStateToProps, { fetchPost })(App);
