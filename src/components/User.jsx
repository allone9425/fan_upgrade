import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsUser, setLogin, toggleLogin } from "redux/modules/authSlice";
// TODO : isUser 전역이 아닌 지역상태로 만들기
function User({ userData }) {
  const { title, button, move } = userData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const axios = require("axios");
  const isUser = useSelector(selectIsUser);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickName] = useState("");

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
  // const moveToHome = async (e) => {
  //   e.preventDefault();
  //   if (inputValid()) {
  //     dispatch(setLogin());
  //     navigate("/");
  //   }
  // };
  const buttonHandler = () => {
    dispatch(toggleLogin());
    setUserId("");
    setPassword("");
    setNickName("");
  };
  //TODO 유효성검사 고장남 W0W
  const sendSignup = async () => {
    if (inputValid()) {
      let response;
      try {
        // Axios를 사용하여 POST 요청 보내기
        response = await axios.post(
          "https://moneyfulpublicpolicy.co.kr/register",
          { id: userId, password: password, nickname: nickName }
        );

        console.log("서버 응답:", response);
        alert("회원가입 되었습니다.");
        //toast("회원가입되었습니다");
        // 성공적으로 가입한 후 로그인 전환
        dispatch(toggleLogin());
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  const sendLogin = async () => {
    //TODO 유효성검사 고장남 W0W inputValid가 유효성 검사임
    if (inputValid()) {
      axios
        .post("https://moneyfulpublicpolicy.co.kr/login?expiresIn=10m", {
          id: userId,
          password: password,
        })
        .then(function (response) {
          console.log(response);
          alert("로그인 되었습니다.");
          //Todo : 전역상태로 로컬스토리지 만들기
          const userDataStorage = {
            userId: response.data.userId,
            password: password,
            nickname: response.data.nickname,
            accessToken: response.data.accessToken,
          };
          //redux에 사용자 데이터 저장
          dispatch(setLogin(userDataStorage));

          //로컬 스토리지에 데이터 저장
          localStorage.setItem("nowLogin", JSON.stringify(userDataStorage));

          // localStorage.setItem("nowLogin", JSON.stringify(userDataStorage));
          // dispatch(setLogin());
        })
        .catch(function (error) {
          alert(error.response.data.message);
        });
      setUserId("");
      setPassword("");
      setNickName("");
    }
  };

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
              <button type="button" onClick={sendLogin}>
                {button}
              </button>
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
      {/* <ToastContainer /> */}
    </>
  );
}

export default User;
