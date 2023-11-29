import Header from "components/Header";
import InputForm from "components/InputForm";
import List from "components/List";
import Member from "components/Member";

import uuid from "react-uuid";

import { useDispatch, useSelector } from "react-redux";
import { updateSelectedMember } from "redux/modules/selectMemberReducer";

function Home() {
  const isUser = useSelector((state) => state.auth.isUser);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  const letters = useSelector((state) => state.letter.letters);

  const handleMemberSelect = (member) => {
    dispatch(updateSelectedMember(member));
  };

  console.log("현재 회원가입 여부", isUser);
  console.log("현재 로그인 여부", isLogin);

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
