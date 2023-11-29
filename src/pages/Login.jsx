import User from "components/User";
import { useSelector } from "react-redux";

function Login() {
  const isUser = useSelector((state) => state.auth.isUser);
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

  return (
    <div>
      <User userData={isUser ? LoginData : SignUpData} />
    </div>
  );
}

export default Login;
