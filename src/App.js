import "./App.css";
import React, { useState } from "react";
import NavbAr from "./Components/NavbAr";
import News from "./Components/News";
import { Routes, Route, HashRouter } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 20;
  // const apiKey = "4735eae269c647c18dc24c90c87e3b6e";
  const apiKey = "0300c04071d24c2db105fed8db108ada";
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
            path="/"
            element={
              <News
                SetProgress={setprogress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/home"
            element={
              <News
                SetProgress={setprogress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />

          <Route
            exact
            path="/business"
            element={
              <News
                SetProgress={setprogress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="in"
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
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                SetProgress={setprogress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                SetProgress={setprogress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                SetProgress={setprogress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                SetProgress={setprogress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
};
export default App;
