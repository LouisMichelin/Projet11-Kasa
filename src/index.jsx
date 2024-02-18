import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";
import "./index.scss";

ReactDOM.render(
   <React.StrictMode>
      <Router>
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
