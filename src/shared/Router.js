import Layout from "Layout/Layout";
import Detail from "pages/Detail";
import Home from "pages/Home";
import Login from "pages/Login";
import MyPage from "pages/MyPage";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "redux/config/configStore";
const Router = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          {isLogin ? (
            <>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/mypage" element={<MyPage />} />
              </Route>
            </>
          ) : (
            <Route path="/" element={<Login />} />
          )}
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default Router;
