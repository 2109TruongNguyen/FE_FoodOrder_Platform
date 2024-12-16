import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/public/HomePage";
import { DEFAULT_PAGE } from './config/Constant';
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path={DEFAULT_PAGE} element={<HomePage />} ></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
