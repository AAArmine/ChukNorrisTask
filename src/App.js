import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import { List } from "./pages/list/List";
import "./assets/style/root.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="list" element={<List />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
