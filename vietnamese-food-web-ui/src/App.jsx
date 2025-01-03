import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/public/HomePage";
import Login from "./page/public/Login";
import Register from "./page/public/Register";
import DetailPage from "./page/public/DetailFood";
import { toast, ToastContainer } from "react-toastify";
import {
  DEFAULT_PAGE,
  LOGIN_PAGE,
  REGISTER_PAGE,
  DETAIL_PAGE,
  PROFILE_PAGE,
  CART_PAGE,
  PAYMENT_PAGE,
} from "./config/Constant";
import ProfilePage from "./page/private/ProfilePage";
import CartPage from "./page/private/CartPage";
import PayMentPage from "./page/private/PayMentPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={DEFAULT_PAGE} element={<HomePage />}></Route>
          <Route path={LOGIN_PAGE} element={<Login />} />
          <Route path={REGISTER_PAGE} element={<Register />} />
          <Route path={DETAIL_PAGE} element={<DetailPage />} />
          <Route path={PROFILE_PAGE} element={<ProfilePage />} />
          <Route path={CART_PAGE} element={<CartPage />} />
          <Route path={PAYMENT_PAGE} element={<PayMentPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
