import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NavBar from "../components/NavBar";
import { Nav } from "react-bootstrap";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
};

export default AppRouter;
