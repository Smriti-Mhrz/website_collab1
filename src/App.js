import "./App.css";
import { NavBar, Footer } from "./components";
import { Product } from "./pages";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
