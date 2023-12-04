import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { __getLetters } from "redux/modules/letterReducer";
import styled from "styled-components";

function List() {
  const dispatch = useDispatch();
  const { isLoding, error, letters } = useSelector((state) => state.letter);

  // authSlice에서 userId와 userData를 가져옴
  const { userId, userData } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(__getLetters());
    console.log(userData.avatar);
  }, [dispatch, userData]);

  const selectedMember = useSelector(
    (state) => state.selectMember.selectedMember
  );
  if (isLoding) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (letters.length === 0) {
    return "남겨진 메세지가 없습니다.";
  }
  let userDataObj = userData
    ? JSON.parse(localStorage.getItem("nowLogin"))
    : null;
  console.log("nickNameObj", userDataObj);
  return (
    <MainList>
      {letters
        .filter(function (letter) {
          if ("전체보기" === selectedMember) {
            return true;
          }
          return letter.writedTo === selectedMember;
        })
        .map(function (item) {
          const color = item.writedTo === "쿠로미" ? "#A1619D" : "#E86F9A";

          // 사용자 ID가 일치하는 경우 userData에서 가져온 프로필 사진과 이름을 사용
          const avatar = item.userId === userId ? userData.avatar : item.avatar;
          console.log("아이템", item);
          console.log("userData", userData);
          console.log("userId", userId);
          const nickname =
            item.userId === userId ? userData.nickname : item.nickname;

          return (
            <Link to={`/detail/${item.id}`} key={item.id}>
              <MainBox key={item.id}>
                <ToWho color={color}>To. {item.writedTo}</ToWho>
                <section>
                  <p>
                    <img src={avatar} alt="사진" />
                  </p>
                  <NameData>
                    <h3>{nickname}</h3>
                    <p>{item.createdAt}</p>
                  </NameData>
                </section>
                <MainText>{item.content}</MainText>
              </MainBox>
            </Link>
          );
        })}
    </MainList>
  );
}

export default List;

const MainBox = styled.div`
  // border: 1px solid #aaa;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 3px 3px 5px #aaa;
  margin: 30px 0;
  position: relative;
  background-color: #f4eef0;

  img {
    width: 80px;
    height: 80px;
  }

  section {
    display: flex;

    align-items: center;

    /*background-color: skyblue;*/
  }
`;

const NameData = styled.div`
  margin-left: 30px;
  font-weight: bold;
`;

const MainText = styled.div`
  margin-top: 20px;
  /* background-color: pink;*/
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 30px;
`;

const MainList = styled.section`
  /*background-color: beige;*/
  margin: auto;
  max-width: 1200px;
  min-width: 800px;
  padding: 40px 0;
  font-size: 22px;
  line-height: 2rem;
`;

const ToWho = styled.p`
  position: absolute;
  right: 20px;
  font-weight: bold;

  color: ${(props) => props.color || "#A1619D"};
`;
