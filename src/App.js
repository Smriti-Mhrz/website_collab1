import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import {
  Contact,
  Product,
  Service,
  Team,
  NotFound,
  Home,
  Portfolio,
  Blog,
} from "./pages";

import { Footer, NavBar } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route index element={<Home />} />
            <Route exact path="/Products" element={<Product />} />
            <Route exact path="/Service" element={<Service />} />
            <Route exact path="/Portfolio" element={<Portfolio />} />
            <Route exact path="/Team" element={<Team />} />
            <Route exact path="/Blog" element={<Blog />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
