import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";
import Propos from "./pages/Propos/Propos";
import Logement from "./pages/Logement/Logement";

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<Propos />} />
            <Route path="*" element={<Error />} />
            <Route path="/logement" element={<Logement />} />
         </Routes>
      </Router>
      <Footer />
   </React.StrictMode>,
   document.getElementById("root")
);
