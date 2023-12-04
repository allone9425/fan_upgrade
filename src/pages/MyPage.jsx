import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

function MyPage() {
  // 상태 설정
  const [edit, setEdit] = useState(false); // 수정 가능 여부
  const [editedNickname, setEditedNickname] = useState(""); // 수정된 닉네임
  const [userProfile, setUserProfile] = useState(null); // 사용자 프로필 정보
  const [selectedFile, setSelectedFile] = useState(null); // 선택된 파일

  // 페이지가 로드되었을 때 사용자 프로필 정보를 가져옴
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        // 로컬 스토리지에서 사용자 데이터와 액세스 토큰을 가져옴
        const userDataStorage = JSON.parse(localStorage.getItem("nowLogin"));
        const accessToken = userDataStorage?.accessToken;
        // 서버에 GET 요청을 보내 사용자 프로필 정보를 가져옴
        const response = await axios.get(
          "https://moneyfulpublicpolicy.co.kr/user",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        // 사용자 프로필 정보를 상태에 저장
        setUserProfile(response.data);
      } catch (error) {
        console.error("프로필 불러오기 실패", error);
      }
    };
    getUserProfile();
  }, []);

  // 파일 입력창에서 파일이 선택되었을 때 실행되는 함수
  // 선택된 파일을 상태에 저장
  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  // 프로필 이미지를 클릭했을 때 실행되는 함수
  // 숨겨진 파일 입력창을 클릭
  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };

  // 수정 버튼을 클릭했을 때 실행되는 함수
  const handleEdit = async () => {
    if (!edit) {
      // 수정 상태가 아니라면 수정 상태로 전환
      setEdit(true);
      return;
    }

    if (editedNickname.trim() === "") {
      // 수정된 닉네임이 비어 있다면 경고 메시지를 출력
      alert("닉네임을 입력해주세요.");
      return;
    }

    // 수정된 닉네임 또는 프로필 이미지를 FormData에 추가
    const formData = new FormData();
    if (selectedFile) {
      formData.append("avatar", selectedFile);
    }
    if (editedNickname !== userProfile.nickname) {
      formData.append("nickname", editedNickname);
    }

    // 로컬 스토리지에서 사용자 데이터와 액세스 토큰을 가져옴
    const userDataStorage = JSON.parse(localStorage.getItem("nowLogin"));
    const accessToken = userDataStorage?.accessToken;
    try {
      // 서버에 PATCH 요청을 보내 프로필을 변경
      const response = await axios.patch(
        "https://moneyfulpublicpolicy.co.kr/profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // 프로필 변경이 완료되면 json-server의 팬레터에 닉네임과 아바타를 수정
      const letters = await axios.get("http://localhost:4000/letters");
      letters.data.forEach(async (letter) => {
        if (letter.userId === userProfile.userId) {
          await axios.patch(`http://localhost:4000/letters/${letter.id}`, {
            nickname: response.data.nickname,
            avatar: response.data.avatar,
          });
        }
      });

      // 변경된 프로필 정보를 상태에 저장하고 로컬 스토리지에도 저장
      setUserProfile(response.data);
      localStorage.setItem("nowLogin", JSON.stringify(response.data));
    } catch (error) {
      console.error("프로필 변경 실패", error);
    }

    // 수정 상태를 해제
    setEdit(false);
  };

  // 닉네임 입력창의 값이 변경되었을 때 실행되는 함수
  // 변경된 값을 상태에 저장
  const handleNicknameChange = (e) => {
    setEditedNickname(e.target.value);
  };

  // 취소 버튼을 클릭했을 때 실행되는 함수
  const handleCancel = () => {
    // 입력창의 값을 초기화하고 수정 상태를 해제
    setEditedNickname("");
    setEdit(false);
  };

  return (
    <ProfileContainer>
      <ProfileBox>
        <h2>내 프로필</h2>
        <ProfileImg onClick={handleImageClick}>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={handleFileInput}
          />
          {userProfile && (
            <img
              src={
                selectedFile
                  ? URL.createObjectURL(selectedFile)
                  : userProfile.avatar
              }
              alt="사진"
            />
          )}
        </ProfileImg>
        {edit ? (
          <input
            maxLength={10}
            value={editedNickname}
            onChange={handleNicknameChange}
          />
        ) : (
          <h3>{userProfile ? userProfile.nickname : ""}</h3>
        )}
        <ProfileId>{userProfile ? userProfile.userId : ""}</ProfileId>
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
