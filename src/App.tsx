import React from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./routes";
import Footer from "./components/layout/Footer/Footer";
import TopBar from "./components/layout/TopBar/TopBar";
import Account from "./components/pages/Account/Account";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import NotFound from "./components/pages/NotFound/NotFound";

function App() {
  return (
    <React.Fragment>
      <div className='app'>
        <TopBar />
        <Routes>
          <Route index path={ROUTES.HOME.path} element={<Home />} />
          <Route path={ROUTES.LOGIN.path} element={<Login />} />
          <Route path={ROUTES.REGISTER.path} element={<Register />} />
          <Route path={ROUTES.ACCOUNT.path} element={<Account />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
