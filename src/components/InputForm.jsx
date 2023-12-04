import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLetter } from "redux/modules/letterReducer";
import { getFormattedDate } from "utils/date";
import { FormBox, FormGroup, FormUserNickName } from "./InputForm.style";

function InputForm({ uuid }) {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  //추가하기
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");

  const [member, setMember] = useState("쿠로미");

  //이름가져와서 고정하기

  let userDataObj = userData
    ? JSON.parse(localStorage.getItem("nowLogin"))
    : null;

  const plusMember = function (e) {
    setMember(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    //추가하기 유효성 검사
    //매개변수 nickname과 content를 받아서,
    //두 값이 모두 존재하면 true를 반환하고,
    //그렇지 않으면 false를 반환합니다.
    const inputValid = (content) => {
      return content;
    };
    const currentDate = new Date();
    const formattedDate = getFormattedDate(currentDate);
    //입력값이 유효한지 확인
    if (inputValid(content)) {
      const newLetters = {
        createdAt: formattedDate,
        nickname: userDataObj.nickname,
        avatar: require("../assets/default.svg").default,
        content: content,
        writedTo: member,
        id: uuid(),
        userId: userDataObj.userId,
      };
      dispatch(addLetter(newLetters))
        .then(() => {
          setNickname("");
          setContent("");
          setMember("");
        })
        .catch((error) => {
          alert("메세지 전송에 실패했습니다.");
        });
    } else {
      alert("내용을 입력해주세요.");
    }
  };

  return (
    <FormBox>
      <FormGroup>
        <label htmlFor="input-name">누구에게 보내요?</label>
        <select onChange={plusMember}>
          <option value={"쿠로미"}>쿠로미</option>
          <option value={"마이멜로디"}>마이멜로디</option>
        </select>
      </FormGroup>

      <FormGroup>
        <label htmlFor="input-name">이름</label>
        {/*<input
          type="text"
          id="input-name"
          maxLength={20}
          placeholder="최대 20글자까지 입력할 수 있어요!"
          // value={nickname}
          // onChange={(e) => setNickname(e.target.value)}
        />
        */}
        <FormUserNickName>{userDataObj.nickname}</FormUserNickName>
      </FormGroup>
      <FormGroup>
        <label htmlFor="input-text">내용</label>
        <textarea
          id="input-text"
          maxLength={100}
          placeholder="최대 100글자까지 입력할 수 있어요!"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </FormGroup>
      <button type="submit" onClick={onSubmitHandler}>
        메세지 보내기
      </button>
    </FormBox>
  );
}

export default InputForm;
