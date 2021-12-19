
import './App.css';
import {BrowserRouter, Route, Router, Routes, Switch} from "react-router-dom"
import React, {useEffect} from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {setDataThunk} from './Redux/ContentReducer'

import { connect } from 'react-redux';
import {getData} from './API/api.js'
// import { compose } from 'redux';
// import RedirectHoc from './HOC/RedirectHoc';




let App =(props)=> {

  
 
   
    return(
      <div className='App'>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Home' element={<Home/>}/>
          </Routes>
      </div>
              
          )}

let mapStateToProps =(state)=>{
  return{
    state: state,
  }
}
export default connect(mapStateToProps, {setDataThunk})(App);
