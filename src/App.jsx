import React from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCartItems } from "redux/cartItemsSlice";

import { Cart } from "./pages/Cart/Cart";
import { Catalogue } from "./pages/Catalogue/Catalogue";
import { Header } from "./components/Header/Header";
import { NotFound } from "./pages/404/NotFound";

import "./App.scss";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  return (
    <HashRouter>
      <div className="app">
        <div className="container">
          <Header />
          <main>
            <div className="wrap">
              <Routes>
                <Route path="/" exact element={<Catalogue />} />
                <Route path="/cart" exact element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
