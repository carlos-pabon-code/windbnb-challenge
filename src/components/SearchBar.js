import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";
import SearchModal from "./SearchModal";

const SearchCtn = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  @media (min-width: 600px) {
    margin: 0px 3rem;
  }
  @media (min-width: 1440px) {
    margin: 0px 8rem;
  }
`;

const SearchCtnLeft = styled.div`
  border-radius: 16px 0px 0px 16px;
  background-color: var(--white);
  width: 150px;
  height: 55px;
  border: 1px solid var(--white2);
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;

const SearchCtnCenter = styled.div`
  border-radius: 0px;
  background-color: var(--white);
  width: 110px;
  height: 55px;
  border: 1px solid var(--white2);
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;

const SearchCtnRight = styled.div`
  border-radius: 0px 16px 16px 0px;
  background-color: var(--white);
  width: 60px;
  height: 55px;
  border: 1px solid var(--white2);
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  color: var(--pink);
  cursor: pointer;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  color: var(--black);
  height: 55px;
  font-family: var(--paragraph);
  outline: none;
  &#location {
    width: 120px;
    padding: 0 0.4rem;
  }
  &#guests {
    width: 100px;
    padding: 0 0.2rem;
  }
  &::placeholder {
    color: var(--gray);
    font-size: 14px;
    font-weight: 400;
  }
`;

const locations = [
  { city: "Helsinki", country: "Finland" },
  { city: "Tokyo", country: "Japan" },
  { city: "Ginebra", country: "Switzerland" },
];

export default function SearchBar({ form, setForm, setSearch }) {
  // useState to toggle the modal on input clicked
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  return (
    <form>
      <SearchCtn>
        <SearchCtnLeft>
          <Input
            id="location"
            name="location"
            placeholder="Add location"
            type="text"
            value={form.location}
            onChange={handleChange}
            required
          />
        </SearchCtnLeft>
        <SearchCtnCenter>
          <Input
            id="guests"
            name="guests"
            placeholder="Add guests"
            type="number"
            value={form.guests}
            onChange={handleChange}
            required
          />
        </SearchCtnCenter>
        <SearchCtnRight onClick={() => setOpenModal(true)}>
          <SearchOutlinedIcon />
        </SearchCtnRight>
        <SearchModal
          setOpenModal={setOpenModal}
          openModal={openModal}
          form={form}
          setForm={setForm}
          locations={locations}
          setSearch={setSearch}
        />
      </SearchCtn>
    </form>
  );
}
