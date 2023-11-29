import styled from "styled-components";
export const DetailBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;
export const BigBox = styled.div`
  background-color: #d8c6de;
  max-width: 600px;
  min-width: 600px;
  border: 1px solid #aaa;

  box-shadow: 3px 3px 5px #aaa;
  margin: 20px 0;
  border-radius: 20px;
  padding: 50px;
  font-size: 20px;
  line-height: 2rem;
  img {
    width: 80px;
    height: 80px;
  }
  h2 {
    font-size: 30px;
    margin: 20px 50px;
    font-weight: bold;
    margin-bottom: 25px;
    text-align: center;
    color: #fff;
  }
  h3 {
    font-size: 22px;
    font-weight: bold;
    text-align: right;
  }
`;

export const BackBtn = styled.button`
  border: none;
  background-color: #f4cad6;
  cursor: pointer;
  padding: 10px 20px;
  font-family: inherit;
  font-weight: bold;
  border-radius: 5px;
  font-size: 20px;

  &:hover {
    background-color: #fffacd;
  }
`;

export const LetterContents = styled.p`
  background-color: rgba(255, 255, 255, 0.5);

  border-radius: 10px;

  padding: 15px;
  line-height: 1.9rem;
  margin-bottom: 20px;
`;

export const Avatar = styled.div`
  text-align: center;
`;

export const ModfiyRemoveBtn = styled.div`
  text-align: right;
  button {
    border: none;
    background-color: #f4cad6;
    cursor: pointer;
    padding: 10px 20px;
    font-family: inherit;
    font-weight: bold;
    border-radius: 5px;
    font-size: 20px;
    margin-bottom: 30px;

    &:last-child {
      margin-left: 20px;
    }
    &:hover {
      background-color: #fffacd;
    }
  }
`;

export const EditTextArea = styled.textarea`
  width: 100%;
  height: 124px;
  margin-bottom: 20px;
  background-color: #fff;
  font-family: inherit;
  font-size: inherit;
  border-radius: 10px;
  border: none;
  padding: 15px;
  line-height: 1.9rem;
`;

export const Bg = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
