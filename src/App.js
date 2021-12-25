/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import { Route, Routes } from "react-router-dom";

import { fetchPost } from "./Redux/ContentReducer";

import { connect } from "react-redux";

import Footer from "./Components/Footer/Footer";
import Article from "./Components/Article/Article";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
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
