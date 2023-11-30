import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "redux/modules/authSlice";
import styled from "styled-components";
//Todo: 마이페이지에서 로그아웃하면 안되는 버그가 있음
function Top() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <Header>
        <HomeButton
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </HomeButton>
        <div>
          <button
            onClick={() => {
              navigate("/mypage");
            }}
          >
            내 프로필
          </button>
          <button
            onClick={() => {
              dispatch(logout());
            }}
          >
            로그아웃
          </button>
        </div>
      </Header>
    </div>
  );
}

export default Top;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: pink;

  button {
    border: none;
    padding: 10px;
    cursor: pointer;
  }
`;

const HomeButton = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
`;
