import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Error from "./components/Error";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
   }

   body {
      margin: 0;
   }
`;

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <GlobalStyle />
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </Router>
      <Footer />
   </React.StrictMode>,
   document.getElementById("root")
);
