import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
import { Provider } from "react-redux"; // 추가된 부분
import store from "redux/config/configStore";

const Router = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default Router;
