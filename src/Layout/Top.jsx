import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "redux/modules/authSlice";
import styled from "styled-components";

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
          메인으로
        </HomeButton>
        <div>
          <ProfilerButton
            onClick={() => {
              navigate("/mypage");
            }}
          >
            내 프로필
          </ProfilerButton>
          <LogOutButton
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            로그아웃
          </LogOutButton>
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
`;

const HomeButton = styled.button`
  border: none;
  background-color: #d8c6de;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #fffacd;
  }
  font-weight: bold;
  font-size: 16px;
  border-radius: 8px;
`;
const ProfilerButton = styled.button`
  border: none;
  background-color: #d8c6de;
  margin-right: 10px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #fffacd;
  }
  font-weight: bold;
  font-size: 16px;
  border-radius: 8px;
`;
const LogOutButton = styled.button`
  border: none;
  background-color: #d8c6de;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #fffacd;
  }
  font-weight: bold;
  font-size: 16px;
  border-radius: 8px;
`;
