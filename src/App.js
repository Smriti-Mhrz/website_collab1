
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Product, Service } from "./pages";
import Home from "./pages/Home";
import { Footer, NavBar } from "./components";
import Portfolio from "./pages/Portfolio";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/Products" element={<Product />} />
          <Route exact path="/Service" element={<Service />} />
          <Route exact path="/Portfolio" element={<Portfolio/>}/>

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );

}

export default App;
