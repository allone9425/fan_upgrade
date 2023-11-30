import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchLetters } from "redux/modules/letterReducer";
import styled from "styled-components";
function List() {
  const letters = useSelector((state) => {
    return state.letter.letters;
  });

  const dispatch = useDispatch();

  const selectedMember = useSelector(
    (state) => state.selectMember.selectedMember
  );
  //console.log(selectedMember);
  // useEffect를 사용하여 특정 멤버가 선택될 때마다 편지 목록을 가져오도록 설정
  useEffect(() => {
    fetchLetters(dispatch);
  }, []);

  // const fetchLetters = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:4000/letters"); // JSON Server의 엔드포인트로 변경
  //     const letters = response.data;

  //     // 기존의 updateLetters 액션을 dispatch하여 리덕스 스토어 업데이트
  //     dispatch(updateLetters(letters));
  //   } catch (error) {
  //     console.error("오류", error);
  //   }
  // };

  if (letters.length === 0) {
    return "남겨진 메세지가 없습니다.";
  }
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
          return (
            <Link to={`/detail/${item.id}`} key={item.id}>
              <MainBox key={item.id}>
                <ToWho color={color}>To. {item.writedTo}</ToWho>
                <section>
                  <p>
                    <img src={item.avatar} alt="사진" />
                  </p>
                  <NameData>
                    <h3>{item.nickname}</h3>
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
