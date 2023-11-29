import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsUser, toggleLogin } from "redux/modules/authSlice";

function User({ userData }) {
  const { title, button, move } = userData;
  const dispatch = useDispatch();
  const isUser = useSelector(selectIsUser);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

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
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            )}
          </p>
          <p>
            <button>{button}</button>
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
