import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Product, Service, Team } from "./pages";
import Home from "./pages/Home";
import { Footer, NavBar } from "./components";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/Products" element={<Product />} />
          <Route exact path="/Service" element={<Service />} />
          <Route exact path="/Team" element={<Team />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
