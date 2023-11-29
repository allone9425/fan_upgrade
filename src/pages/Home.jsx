import React from "react";
import uuid from "react-uuid";
import List from "components/List";
import InputForm from "components/InputForm";
import Member from "components/Member";
import Header from "components/Header";

import { useDispatch, useSelector } from "react-redux";
import { updateSelectedMember } from "redux/reducers/selectMemberReducer";

function Home() {
  const dispatch = useDispatch();

  const letters = useSelector((state) => state.letter.letters);

  const handleMemberSelect = (member) => {
    dispatch(updateSelectedMember(member));
  };

  return (
    <div>
      <Header />
      <InputForm uuid={uuid} />

      <Member onMemberSelect={handleMemberSelect} />

      {letters.length === 0 ? <h6>남겨진 팬레터가 없습니다.</h6> : <List />}
    </div>
  );
}

export default Home;
