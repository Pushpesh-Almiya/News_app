import "./App.css";
import React, { useState } from "react"
import Navbar from './components/Navbar'
import News from "./components/News";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const  App =()=> {
  
const [progress, setProgress]= useState(0)
  // setProgress = (progress) =>{
  //   setState({progress: progress})
  // }
  const pageSize=5;
  const apikey = process.env.REACT_APP_NEWS_API
    return (
      
      <>
      <Router>
          <Navbar/>
          <LoadingBar
          height={2}
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey}  key="general"  country='in' pageSize={pageSize}  category='General' />}></Route>
          <Route exact path="/business"element={<News setProgress={setProgress} apikey={apikey}  key="business"  country='in' pageSize={pageSize}  category='Business' />}></Route>
          <Route exact path="/entertainment"element={<News setProgress={setProgress} apikey={apikey} key="entertainment"  country='in' pageSize={pageSize}  category='Entertainment'/>}></Route>
          <Route exact path="/general"element={<News setProgress={setProgress} apikey={apikey}  key="general"  country='in' pageSize={pageSize}  category='General'/>}></Route>
          <Route exact path="/health"element={<News setProgress={setProgress} apikey={apikey}  key="health"  country='in' pageSize={pageSize}  category='Health'/>}></Route>
          <Route exact path="/science"element={<News setProgress={setProgress} apikey={apikey}  key="science"  country='in' pageSize={pageSize}  category='Science'/>}></Route>
          <Route exact path="/sports"element={<News setProgress={setProgress} apikey={apikey}  key="sports"  country='in' pageSize={pageSize}  category='Sports'/>}></Route>
          <Route exact path="/technology"element={<News setProgress={setProgress} apikey={apikey}  key="technology"  country='in' pageSize={pageSize}  category='Technology'/>}></Route>
        </Routes>
      </Router>
      </>
    )
  }

export default App