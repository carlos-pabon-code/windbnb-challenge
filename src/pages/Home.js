import { useState } from "react";
import styled from "styled-components";
import Apartments from "../components/Apartments";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const Main = styled.main`
  height: 100%;
  padding: 20px 0px;
`;

const initialState = {
  location: "",
  guests: "",
};

export default function Home() {
  //useState para guardar los datos de la búsqueda
  const [form, setForm] = useState(initialState);
  //useState para guardar el estado para validar cuando se realiza la búsqueda
  const [search, setSearch] = useState(false);

  return (
    <>
      <Header form={form} setForm={setForm} setSearch={setSearch} />
      <Main role="main">
        <Apartments form={form} search={search} setSearch={setSearch} />
      </Main>
      <Footer />
    </>
  );
}
