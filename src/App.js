import "./App.css";
import React, { Component } from "react"
import Navbar from './components/Navbar'
import News from "./components/News";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pageSize=5;
  apikey = process.env.REACT_APP_NEWS_API

  state={
    progress:0
  }
  setProgress = (progress) =>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
      <Router>
          <Navbar/>
          <LoadingBar
          height={2}
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="general"  country='in' pageSize={this.pageSize}  category='General' />}></Route>
          <Route exact path="/business"element={<News setProgress={this.setProgress} apikey={this.apikey}  key="business"  country='in' pageSize={this.pageSize}  category='Business' />}></Route>
          <Route exact path="/entertainment"element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment"  country='in' pageSize={this.pageSize}  category='Entertainment'/>}></Route>
          <Route exact path="/general"element={<News setProgress={this.setProgress} apikey={this.apikey}  key="general"  country='in' pageSize={this.pageSize}  category='General'/>}></Route>
          <Route exact path="/health"element={<News setProgress={this.setProgress} apikey={this.apikey}  key="health"  country='in' pageSize={this.pageSize}  category='Health'/>}></Route>
          <Route exact path="/science"element={<News setProgress={this.setProgress} apikey={this.apikey}  key="science"  country='in' pageSize={this.pageSize}  category='Science'/>}></Route>
          <Route exact path="/sports"element={<News setProgress={this.setProgress} apikey={this.apikey}  key="sports"  country='in' pageSize={this.pageSize}  category='Sports'/>}></Route>
          <Route exact path="/technology"element={<News setProgress={this.setProgress} apikey={this.apikey}  key="technology"  country='in' pageSize={this.pageSize}  category='Technology'/>}></Route>
        </Routes>
      </Router>
      </>
    )
  }
}

