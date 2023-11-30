import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsUser, setLogin, toggleLogin } from "redux/modules/authSlice";

function User({ userData }) {
  const { title, button, move } = userData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const axios = require("axios");
  const isUser = useSelector(selectIsUser);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickName] = useState("");
  const [signUp, newSignUp] = useState({
    id: userId,
    password: password,
    nickname: nickName,
  });

  const inputValid = () => {
    if (
      userId === "" ||
      password === "" ||
      (title === "회원가입" && nickName === "")
    ) {
      if (userId === "") {
        alert("아이디를 입력해주세요.");
      }
      if (password === "") {
        alert("비밀번호를 입력해주세요.");
      }
      if (title === "회원가입" && nickName === "") {
        alert("닉네임을 입력해주세요.");
      }
      return false;
    }

    return true;
  };
  const moveToHome = async (e) => {
    e.preventDefault();
    if (inputValid()) {
      dispatch(setLogin());
      navigate("/");
    }
  };
  const buttonHandler = () => {
    dispatch(toggleLogin());
  };

  const sendSignup = async () => {
    let response;
    try {
      // Axios를 사용하여 POST 요청 보내기
      response = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/register",
        signUp
      );
      // 여기서 signUp 상태 업데이트
      newSignUp({
        id: userId,
        password: password,
        nickname: nickName,
      });
      // 서버로부터 받은 응답을 console.log로 출력
      console.log("서버 응답:", response);

      // 성공적으로 가입한 후 로그인 전환
      //dispatch(toggleLogin());
    } catch (error) {
      // 오류 처리
      console.error("가입 오류", error);
    }
  };

  console.log(signUp);
  return (
    <>
      <div>
        <p>{title}</p>
        <form>
          <p>
            <input
              type="text"
              name="userId"
              placeholder="아이디"
              minLength={4}
              maxLength={10}
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
              }}
            />
          </p>
          <p>
            <input
              type="password"
              name="password"
              minLength={4}
              maxLength={15}
              placeholder="비밀번호"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </p>
          <p>
            {title === "회원가입" && (
              <input
                type="text"
                placeholder="닉네임"
                value={nickName}
                minLength={1}
                maxLength={10}
                onChange={(e) => {
                  setNickName(e.target.value);
                }}
              />
            )}
          </p>
          {isUser ? (
            <p>
              <button onClick={moveToHome}>{button}</button>
            </p>
          ) : (
            <p>
              <button type="button" onClick={sendSignup}>
                {button}
              </button>
            </p>
          )}
          <p>
            <button type="button" onClick={buttonHandler}>
              {move}
            </button>
          </p>
        </form>
      </div>
    </>
  );
}

export default User;
