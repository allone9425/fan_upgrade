import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteLetter, editLetter } from "redux/modules/letterReducer";
import backgroundImage from "../assets/detailbg.jpg";
import {
  Avatar,
  BackBtn,
  Bg,
  BigBox,
  DetailBox,
  EditTextArea,
  LetterContents,
  ModfiyRemoveBtn,
} from "./Detail.style";

function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const letters = useSelector((state) => state.letter.letters);

  const foundData = letters.find((item) => item.id === params.id);
  const userId = useSelector((state) => state.letter.userId); // 현재 로그인한 사용자의 ID

  const deleteBtn = () => {
    const alertDelete = window.confirm("정말 삭제할래요?");
    if (alertDelete) {
      dispatch(deleteLetter(foundData.id))
        .then(() => {
          navigate("/"); // 삭제 후 메인 페이지로 이동
        })
        .catch((error) => {
          alert("삭제에 실패했습니다.");
        });
    }
  };

  const [edit, setEdit] = useState(false);
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
      dispatch(editLetter({ id: foundData.id, newContent: editing }));
      setEdit(false);
      setEditing("");
    }
  };
  console.log("userId", userId);
  return (
    <>
      {foundData && (
        <>
          <Bg src={backgroundImage} />
          <DetailBox>
            <Link to={"/"}>
              <BackBtn>&larr; 메인으로</BackBtn>
            </Link>
            <BigBox>
              <Avatar>
                <img src={foundData.avatar} alt="사진" />
              </Avatar>
              <h2>To. {foundData.writedTo}</h2>
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
                // 본인이 작성한 게시물일 경우에만 수정, 삭제 버튼 노출
                foundData.userId === userId && (
                  <>
                    <button onClick={modifyBtn}>수정</button>
                    <button onClick={deleteBtn}>삭제</button>
                  </>
                )
              )}
            </ModfiyRemoveBtn>
          </DetailBox>
        </>
      )}
    </>
  );
}

export default Detail;
