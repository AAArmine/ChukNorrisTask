import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import { List } from "./pages/list/List";
import "./assets/style/root.scss";
import { createContext, useReducer } from "react";
import { listReducer } from "./reducers/listReducer";

export const JokesContext = createContext();
function App() {
  const [list, dispatch] = useReducer(listReducer, []);
  return (
    <div className="App">
      <Header />
      <JokesContext.Provider value={{list, dispatch}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="list" element={<List />} />
        </Routes>
      </JokesContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
