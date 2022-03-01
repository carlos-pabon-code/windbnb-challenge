import styled from "styled-components";
import LogoWind from "../logo.png";
import SearchBar from "./SearchBar";

const HeaderCtn = styled.header`
  margin-top: 1rem;
  padding: 1rem;
  width: 100%;
  height: 80px;
  @media (min-width: 600px) {
    padding: 5rem 0rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* gap: 4rem; */
    margin-top: 0px;
  }
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 1rem;
  @media (min-width: 600px) {
    width: 120px;
  }
  @media (min-width: 768px) {
    width: 150px;
    margin: 0px 3rem;
  }
  @media (min-width: 1440px) {
    margin: 0px 8rem;
  }
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
