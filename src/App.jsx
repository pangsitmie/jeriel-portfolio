import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Winpro from "./pages/winpro/Winpro";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Router basename="/">

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/winpro' element={<Winpro />} />


          <Route path='/404' element={<Home />} />
          <Route path='*' element={<Home />} />

        </Routes>
        <Footer />

      </Router>
    </>
  );
};

export default App;
