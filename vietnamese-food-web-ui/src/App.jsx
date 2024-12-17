import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/public/HomePage";
import Login from "./page/public/auth/Login/Login"
import Register from "./page/public/auth/Register/Register"
import { DEFAULT_PAGE } from './config/Constant';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={DEFAULT_PAGE} element={<HomePage />} ></Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
