import styled from "styled-components";
export const FormBox = styled.form`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
  margin-top: 50px;
  background-color: #d8c6de;
  //border: 1px solid #aaa;
  box-shadow: 3px 3px 5px #aaa;
  font-size: 16px;
  padding: 50px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  border-radius: 10px;
  button {
    border: none;
    font-weight: 500;
    padding: 20px 10px;
    background-color: #f4cad6;
    font-size: 20px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background-color: #fffacd;
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  select {
    padding: 10px 20px;
    width: calc(100% - 156px);
    border: none;
    font-size: 20px;
    outline: none;
    font-weight: 500;
    font-family: inherit;
    -webkit-appearance: none; /* 화살표 없애기 for chrome*/
    -moz-appearance: none; /* 화살표 없애기 for firefox*/
    appearance: none; /* 화살표 없애기 공통*/
    &::-ms-expand {
      display: none; /*for IE10,11*/
    }
  }

  label {
    padding-right: 20px;
    font-size: 20px;
    font-weight: 600;
  }

  textarea {
    padding: 10px;
    width: calc(100% - 60px);
    height: 66px;
    border: none;
    font-weight: 500;
    &::placeholder {
      color: #ccc;
    }
    font-size: 20px;
  }

  input {
    font-weight: 500;
    padding: 10px;
    width: calc(100% - 60px);
    border: none;
    &::placeholder {
      color: #ccc;
    }
    font-size: 20px;
  }
`;
