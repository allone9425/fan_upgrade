/*const response = await axios.get("https://moneyfulpublicpolicy.co.kr/user", {
  headers: {
    "Content-Type": "application/json",
    //  Authorization: `Bearer ${accessToken}`,
  },
});*/
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
function MyPage() {
  const [edit, setEdit] = useState(false);
  const [editedNickname, setEditedNickname] = useState("");
  const userData = useSelector((state) => state.auth.userData);
  let userDataObj = userData
    ? JSON.parse(localStorage.getItem("nowLogin"))
    : null;

  const handleEdit = () => {
    if (edit) {
      // 수정 모드에서는 변경 사항을 저장합니다.
      if (editedNickname.trim() === "") {
        // 수정 중인 닉네임이 공백일 경우 알림을 표시합니다.
        alert("닉네임을 입력해주세요.");
        return;
      }

      userDataObj = {
        ...userDataObj,
        nickname: editedNickname,
      };
      localStorage.setItem("nowLogin", JSON.stringify(userDataObj));
    }
    setEdit(!edit); // 수정 모드를 토글합니다.
  };

  const handleNicknameChange = (e) => {
    setEditedNickname(e.target.value);
  };

  const handleCancel = () => {
    // 취소 버튼을 누를 경우, 수정 중인 내용을 초기화하고 수정 모드를 끕니다.
    setEditedNickname("");
    setEdit(false);
  };

  return (
    <ProfileContainer>
      <ProfileBox>
        <h2>내 프로필</h2>
        <ProfileImg>
          <img src="https://raw.githubusercontent.com/allone9425/nbc_fan/56b984e3565f06b12070cc5c468f5a2d97a9b1a5/src/assets/default.svg" />
        </ProfileImg>
        {edit ? (
          <input
            maxLength={10}
            value={editedNickname}
            onChange={handleNicknameChange}
          />
        ) : (
          <h3>{userDataObj.nickname}</h3>
        )}
        <ProfileId>{userDataObj.userId}</ProfileId>
        <button onClick={handleEdit}>{edit ? "저장" : "수정하기"}</button>
        {edit && <button onClick={handleCancel}>취소</button>}
      </ProfileBox>
    </ProfileContainer>
  );
}

export default MyPage;

const ProfileImg = styled.div`
  img {
    width: 150px;
  }
  width: 600px;
`;

const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  background-color: #f4cad6;
  padding: 20px;
  flex-wrap: wrap;
  box-shadow: 3px 3px 10px #aaa;
  border-radius: 20px;
  text-align: center;
  line-height: 2rem;
  width: 800px;
  align-items: center;

  h2 {
    font-size: 28px;
    font-weight: bold;
    width: 600px;
    padding-bottom: 20px;
  }

  h3 {
    width: 600px;
    padding-top: 20px;
    font-weight: bold;
    font-size: 24px;
  }

  input {
    margin-top: 20px;
    border-radius: 8px;
    font-weight: bold;
    text-align: center;
    font-size: 24px;
    padding: 10px;
    width: 300px;
    border: none;
  }
  button {
    width: 200px;
    border: none;
    padding: 10px 20px;
    font-weight: bold;
    background-color: #d8c6de;
    border-radius: 8px;
    font-size: 18px;
    &:last-of-type {
      margin-left: 20px;
    }
    &:hover {
      background-color: #fffacd;
    }
  }
`;

const ProfileId = styled.p`
  font-size: 18px;
  margin: 10px 0 20px;
  font-weight: bold;
  width: 600px;
`;

const ProfileContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 59px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
