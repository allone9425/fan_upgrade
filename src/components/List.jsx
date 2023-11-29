import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function List() {
  const letters = useSelector((state) => {
    return state.letter.letters;
  });

  const selectedMember = useSelector(
    (state) => state.selectMember.selectedMember
  );
  console.log(selectedMember);
  //const { letters } = useContext(LettersContext);
  //const { selectedMember } = useContext(SelectMemberContext);
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
