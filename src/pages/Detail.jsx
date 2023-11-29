import React from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import backgroundImage from "../assets/detailbg.jpg";

import { useDispatch, useSelector } from "react-redux";
import { updateLetters } from "redux/reducers/letterReducer";
import {
  DetailBox,
  BigBox,
  BackBtn,
  Bg,
  Avatar,
  EditTextArea,
  LetterContents,
  ModfiyRemoveBtn,
} from "./Detail.style";

function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const location = useLocation();
  const params = useParams();
  const letters = useSelector((state) => state.letter.letters);
  const foundData = letters.find((item) => item.id === params.id);

  //console.log("params", params);
  //console.log("found", foundData);

  const deleteBtn = () => {
    // 삭제 확인하기  window.confirm
    const alertDelete = window.confirm("정말 삭제할래요?");
    if (alertDelete) {
      // 선택된 아이템을 제외한 새로운 배열 생성
      const updatedLetters = letters.filter((item) => item.id !== foundData.id);
      // 메인 페이지로 가기
      navigate("/");
      // 상태 업데이트
      //setLetters(newLetters);
      dispatch(updateLetters(updatedLetters));
      // dispatch({
      //   type: "letter/UPDATE_LETTERS",
      //   payload: updatedLetters,
      // })
    }
  };

  //수정기능을 위한 스테이트
  //수정 중인지 아닌지 알려주는 스테이트
  const [edit, setEdit] = useState(false);

  //수정 중일때 상태 관리하는 스테이트
  const [editing, setEditing] = useState("");

  const modifyBtn = () => {
    setEdit(true);
    setEditing(foundData.content);
  };

  const cancelBtn = () => {
    setEdit(false);
    setEditing("");
  };

  const saveBtn = () => {
    if (editing === foundData.content) {
      alert("아무런 수정사항이 없어요!");
    } else {
      const updatedLetters = letters.map((item) =>
        item.id === foundData.id ? { ...item, content: editing } : item
      );
      //setLetters(updateLetters);
      dispatch(updateLetters(updatedLetters));
      //navigate("/");
      setEdit(false);
      setEditing("");
    }
    //console.log(editing);
  };

  return (
    <>
      <Bg src={backgroundImage} />
      <DetailBox>
        <Link to={"/"}>
          <BackBtn>&larr; 메인으로</BackBtn>
        </Link>

        <BigBox>
          {/*<h3>{foundData.id}</h3>*/}

          <Avatar>
            <img src={foundData.avatar} alt="사진" />
          </Avatar>
          <h2>To. {foundData.writedTo}</h2>
          {/*<LetterContents>{foundData.content}</LetterContents>*/}
          {edit ? (
            <EditTextArea
              value={editing}
              autoFocus
              onChange={(e) => setEditing(e.target.value)}
            />
          ) : (
            <LetterContents>{foundData.content}</LetterContents>
          )}

          <h3>Written By {foundData.nickname}</h3>
          <h3>{foundData.createdAt}</h3>
        </BigBox>
        <ModfiyRemoveBtn>
          {edit ? (
            <>
              <button onClick={saveBtn}>완료</button>
              <button onClick={cancelBtn}>취소</button>
            </>
          ) : (
            <>
              <button onClick={modifyBtn}>수정</button>
              <button onClick={deleteBtn}>삭제</button>
            </>
          )}
        </ModfiyRemoveBtn>
      </DetailBox>
    </>
  );
}

export default Detail;
