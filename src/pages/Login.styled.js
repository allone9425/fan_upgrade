import styled from "styled-components";

export const InputLoginID = styled.input`
  border: none;
  background-color: #eee;
  padding: 20px;
  font-size: 16px;
  width: 350px;
  margin-bottom: 20px;
  border-radius: 8px;
`;
export const InputNickName = styled.input`
  border: none;
  background-color: #eee;
  padding: 20px;
  font-size: 16px;
  width: 350px;
  margin: 20px 0;
  border-radius: 8px;
`;
export const InputLoginPW = styled.input`
  border: none;
  font-size: 16px;
  background-color: #eee;
  padding: 20px;
  width: 350px;
  border-radius: 8px;
`;
//핑크는 이컬러 #f4cad6
export const LoginForm = styled.form`
  background-color: #d8c6de;
  width: 400px;
  padding: 20px;
  display: flex;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  height: 600px;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
`;

export const LoginBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px auto;
  width: 800px;
  box-shadow: 3px 3px 10px #aaa;
  border-radius: 15px;
  //background-color: lemonchiffon;
  img {
    padding-right: 20px;
    padding-left: 15px;
    width: 100%;
    vertical-align: middle;
  }
`;

export const LoginBtn = styled.button`
  width: 350px;
  margin: 20px 0;
  border: none;
  background-color: #f4cad6;
  padding: 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background-color: #fffacd;
  }
`;
export const SignSave = styled.button`
  width: 350px;
  margin: 20px 0;
  border: none;
  background-color: #f4cad6;
  padding: 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background-color: #fffacd;
  }
`;
export const SignUpBtn = styled.button`
  width: 350px;
  border: none;
  background-color: #f4cad6;
  padding: 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background-color: #fffacd;
  }
`;

export const LoginTitle = styled.p`
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
`;
