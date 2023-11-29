import Detail from "pages/Detail";
import Home from "pages/Home";
import Login from "pages/Login";
import MyPage from "pages/MyPage";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "redux/config/configStore";

const Router = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default Router;
