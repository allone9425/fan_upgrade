import User from "components/User";
import { useSelector } from "react-redux";

function Login() {
  const isUser = useSelector((state) => state.auth.isUser);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const LoginData = {
    title: "로그인",
    button: "로그인하기",
    move: "회원가입",
  };
  const SignUpData = {
    title: "회원가입",
    button: "가입하기",
    move: "로그인",
  };
  console.log("현재 회원가입 여부", isUser);
  console.log("현재 로그인 여부", isLogin);
  return (
    <div>
      <User userData={isUser ? LoginData : SignUpData} />
    </div>
  );
}

export default Login;
