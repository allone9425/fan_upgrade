import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsUser, setLogin, toggleLogin } from "redux/modules/authSlice";

function User({ userData }) {
  const { title, button, move } = userData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUser = useSelector(selectIsUser);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const inputValid = () => {
    if (
      userId === "" ||
      password === "" ||
      (title === "회원가입" && name === "")
    ) {
      if (userId === "") {
        alert("아이디를 입력해주세요.");
      }
      if (password === "") {
        alert("비밀번호를 입력해주세요.");
      }
      if (title === "회원가입" && name === "") {
        alert("닉네임을 입력해주세요.");
      }
      return false;
    }

    return true;
  };
  const moveToHome = (e) => {
    e.preventDefault();
    if (inputValid()) {
      dispatch(setLogin());
      navigate("/");
    }
  };
  const buttonHandler = () => {
    dispatch(toggleLogin());
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
                value={name}
                minLength={1}
                maxLength={10}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            )}
          </p>
          <p>
            <button onClick={moveToHome}>{button}</button>
          </p>
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
