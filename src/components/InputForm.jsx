import { useState } from "react";
import { FormBox, FormGroup } from "./InputForm.style";

import { useDispatch } from "react-redux";
import { addLetter } from "redux/reducers/letterReducer";

function InputForm({ uuid }) {
  const dispatch = useDispatch();

  //추가하기
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");

  const [member, setMember] = useState("쿠로미");
  const plusMember = function (e) {
    setMember(e.target.value);
  };

  const onSubmitHandler = (e) => {
    //alert("연결확인");
    e.preventDefault();
    //추가하기 유효성 검사
    //매개변수 nickname과 content를 받아서,
    //두 값이 모두 존재하면 true를 반환하고,
    //그렇지 않으면 false를 반환합니다.
    const inputValid = (nickname, content) => {
      return nickname && content;
    };

    //입력값이 유효한지 확인
    if (inputValid(nickname, content)) {
      const now = new Date();
      //nowKor = now.toDateString()은 현재 날짜를 문자열로 변환,
      // now.toLocaleTimeString()은 현재 시간을 문자열로 변환 해서 둘다 ``으로 합치기
      const nowKor = `${now.toDateString()} ${now.toLocaleTimeString()}`;
      const newLetters = {
        createdAt: nowKor,
        nickname: nickname,
        avatar: require("../assets/default.svg").default,
        content: content,
        writedTo: member,
        id: uuid(),
      };
      dispatch(addLetter(newLetters));
      //setLetters([...letters, newLetters]);
      setNickname("");
      setContent("");
      setMember("");
    } else {
      alert("이름과 내용을 입력해주세요.");
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
        <input
          type="text"
          id="input-name"
          maxLength={20}
          placeholder="최대 20글자까지 입력할 수 있어요!"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
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
