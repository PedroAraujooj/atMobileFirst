import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import Loading from "./components/Loading";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Login from "./pages/Login";
import Lista from "./pages/List";

// const Login = lazy(() => import("./pages/Login"));
// const Layout = lazy(() => import("./pages/Layout"));
// const Home = lazy(() => import("./pages/Home"));
// const Form = lazy(() => import("./pages/Form"));
// const List = lazy(() => import("./pages/List"));

function App() {
  const [usuario, setUsuario] = useState({ id: "", email: "", senha: "" });
  const [lista, setLista] = useState([]);

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={<Layout usuario={usuario} setUsuario={setUsuario} />}
          >
            <Route
              index
              element={<Home usuario={usuario} setUsuario={setUsuario} lista={lista} setLista={setLista}/>}
            />
            <Route
              path="login"
              element={<Login usuario={usuario} setUsuario={setUsuario} />}
            />
            <Route
              path="form"
              element={<Form usuario={usuario} setUsuario={setUsuario} lista={lista} setLista={setLista}/>}
            />
            <Route
              path="lista"
              element={<Lista usuario={usuario} setUsuario={setUsuario} lista={lista} setLista={setLista}/>}
            />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
