import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

ReactDOM.render(
   <React.StrictMode>
      <Router>
         {/* <GlobalStyle />
         <Header /> */}
         <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="*" element={<Error />} /> */}
         </Routes>
      </Router>
   </React.StrictMode>,
   document.getElementById("root")
);
