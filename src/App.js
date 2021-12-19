
import './App.css';
import {BrowserRouter, Route, Router, Routes, Switch} from "react-router-dom"
import React, {useEffect} from 'react';


import {setDataThunk} from './Redux/ContentReducer'

import { connect } from 'react-redux';
import {getData} from './API/api.js'
import Footer from './Components/Footer/Footer';
import Article from './Components/Article/Article';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
// import { compose } from 'redux';
// import RedirectHoc from './HOC/RedirectHoc';




let App =(props)=> {

  
 
   
    return(
      <div className='App'>
        <Header/>
        <Routes >
          <Route path="/" element={<Home />}/>
          <Route path="/Article" element={<Article />}>
            <Route path=":id" element={<Article />} />
            <Route path="*" element={<Article />} />
          </Route>
        </Routes>
        <Footer />
      </div>
              
          )}

let mapStateToProps =(state)=>{
  return{
    state: state,
  }
}
export default connect(mapStateToProps, {setDataThunk})(App);
