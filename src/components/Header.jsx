import styled from "styled-components";
import cover from "../assets/cover.jpg";

function Header() {
  return (
    <Title>
      <a href="./">
        <h2>아티스트 컬렉션</h2>
      </a>
    </Title>
  );
}

export default Header;
const Title = styled.header`
  background: url(${cover});
  background-size: cover;
  background-position: center;
  padding: 100px;
  h2 {
    font-size: 60px;
    text-align: center;
    margin: 30px 0;
    font-weight: bold;
    font-family: "PartialSansKR-Regular";
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fffacd;
    opacity: 0.5;
  }
`;
