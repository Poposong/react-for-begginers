import { useState, useEffect } from "react";


import { BrowserRouter as Router, Switch, Route, BrowserRouter ,Routes} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

export default function App() {
  
  return <Router>
    <Switch>
      <Route path="/hello">
        <h2>Hello</h2> 
      </Route>
      <Route path="/movie/:id"> 
        <Detail />
      </Route>
      <Route path="/detail"> 
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>;
}


// App.js 는 더 이상 영화들을 보여주지 않고 대신에 App.js는 router를 render한다.
// router는 URL을 보고 있는 component 이다
