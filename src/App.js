import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Contact, Product, Service, Team, NotFound } from "./pages";
import Home from "./pages/Home";
import { Footer, NavBar } from "./components";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
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
