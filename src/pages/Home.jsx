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

  return (
    <div>
      <Header />
      <InputForm uuid={uuid} />

      <Member onMemberSelect={handleMemberSelect} />

      <List />
    </div>
  );
}

export default Home;
