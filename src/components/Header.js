import styled from "styled-components";
import LogoWind from "../logo.png";
import SearchBar from "./SearchBar";

const HeaderCtn = styled.header`
  padding: 1rem;
  width: 100%;
  height: 80px;
  @media (min-width: 600px) {
    padding: 5rem 0rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 4rem;
  }
  @media (min-width: 768px) {
    gap: 20rem;
  }
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 1rem;
`;

export default function Header() {
  return (
    <HeaderCtn>
      <figure>
        <Logo alt="logo" src={LogoWind} />
      </figure>
      <SearchBar />
    </HeaderCtn>
  );
}
