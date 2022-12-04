import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer/Footer";
import TopBar from "./components/layout/TopBar/TopBar";
import Account from "./components/pages/Account/Account";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <React.Fragment>
      <div className='app'>
        <TopBar />
        <Routes>
          <Route path='/account' element={<Account />} />
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
