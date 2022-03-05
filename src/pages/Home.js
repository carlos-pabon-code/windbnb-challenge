import styled from "styled-components";
import Apartments from "../components/Apartments";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const Main = styled.main`
  height: 100%;
  padding: 20px 0px;
`;

export default function Home() {
  return (
    <>
      <Header />
      <Main role="main">
        <Apartments />
      </Main>
      <Footer />
    </>
  );
}
