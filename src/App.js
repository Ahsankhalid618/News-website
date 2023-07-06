import "./App.css";
import React, { useState } from "react";
import NavbAr from "./Components/NavbAr";
import News from "./Components/News";
import { Routes, Route, HashRouter } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 20;
  // const apiKey = "4735eae269c647c18dc24c90c87e3b6e";
 
  const [progress, setProgress] = useState(0);

  const setprogress = (progress) => {
    setProgress(progress);
  };

  return (
    <div>
      <HashRouter>
        <NavbAr />
        <LoadingBar color="#f11946" height={2.5} progress={progress} />
        <Routes>
          <Route
            exact
            path="/home"
            element={
              <News
                SetProgress={setprogress}
            
                key="general"
                pageSize={pageSize}
                country="us"
                category="news"
              />
            }
          />
          <Route
            exact
            path="/home"
            element={
              <News
                SetProgress={setprogress}
                key="world"
                pageSize={pageSize}
                country="us"
                category="world"
              />
            }
          />

          <Route
            exact
            path="/business"
            element={
              <News
                SetProgress={setprogress}
                key="business"
                pageSize={pageSize}
                country="us"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                SetProgress={setprogress}
               
                key="entertainment"
                pageSize={pageSize}
                country="us"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/gaming"
            element={
              <News
                SetProgress={setprogress}
               
                key="gaming"
                pageSize={pageSize}
                country="us"
                category="gaming"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                SetProgress={setprogress}
               
                key="science"
                pageSize={pageSize}
                country="us"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sport"
            element={
              <News
                SetProgress={setprogress}
              
                key="sport"
                pageSize={pageSize}
                country="us"
                category="sport"
              />
            }
          />
          <Route
            exact
            path="/tech"
            element={
              <News
                SetProgress={setprogress}
               
                key="tech"
                pageSize={pageSize}
                country="us"
                category="tech"
              />
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
};
export default App;
