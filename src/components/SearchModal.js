import styled, { css } from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import PinDropIcon from "@mui/icons-material/PinDrop";
import { useEffect, useState } from "react";

const SearchCtn = styled.section`
  margin: 0;
  padding: 1rem;
  position: absolute;
  margin-top: -1rem;
  z-index: 900;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  background-color: var(--white);
  transform: translateY(-200%);
  transition: all 0.5s ease-in-out;
  font-family: var(--paragraph);
  ${({ openModal }) =>
    openModal &&
    css`
      transform: translateY(0);
    `}

  @media (min-width: 600px) {
    margin-top: 0rem;
  }
`;

export const Overlay = styled.main`
  transition: all 0.8s ease-in-out;
  ${({ openModal }) =>
    openModal &&
    css`
      background-color: rgb(0, 0, 0, 0.5);
      position: absolute;
      z-index: 200;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
    `}
`;

const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchTitle = styled.h2`
  font-weight: 700;
  font-size: 12px;
`;

const SearchCloseButton = styled.svg`
  width: 14px;
  height: 14px;
`;

const SearchInputCtn = styled.div`
  margin: 1rem auto;
  display: block;

  .search-input-ctn {
    padding: 0.1rem 1rem;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    height: 55px;
    width: 100%;
    @media (min-width: 1024px) {
      width: 30%;
      &:focus-within {
        border: solid thin var(--black);
      }
    }
  }
  .search-input {
    outline: none;
    border: none;
    padding: 0px 1rem;
    width: 100%;
    @media (min-width: 1024px) {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.4rem;
    }
  }
  .search-input::placeholder {
    color: var(--gray);
    font-weight: 400;
  }
  @media (min-width: 1024px) {
    & {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const InputCtnTop = styled.div`
  border-radius: 16px 16px 0px 0px;
  @media (min-width: 1024px) {
    & {
      border-radius: 16px;
      margin-right: 1rem;
    }
  }
`;

const InputCtnBottom = styled.div`
  border-radius: 0px 0px 16px 16px;
  @media (min-width: 1024px) {
    & {
      border-radius: 16px;
    }
  }
`;

const SearchLabel = styled.label`
  font-family: var(--paragraph);
  font-size: 9px;
  font-weight: 800;
  text-transform: uppercase;
  padding: 0.4rem 1rem;
  display: block;
  @media (min-width: 1024px) {
    padding: 0.4rem 0;
  }
`;

const SearchLocationsCtn = styled.section`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 1rem;
`;

const PinIcon = styled.div`
  color: var(--black2);
`;

const SearchLocationList = styled.li`
  text-decoration: none;
  list-style: none;
  font-size: 14px;
  color: var(--black2);
  font-family: var(--paragraph);
  cursor: pointer;
`;

const SearchButton = styled.button`
  display: none;
  background-color: var(--pink);
  width: 126px;
  margin: 1rem auto;
  height: 48px;
  border-radius: 18px;
  color: var(--white2);
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  justify-content: center;
  border: none;
  cursor: pointer;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const SearchButtonRow = styled.button`
  display: none;
  @media (min-width: 1024px) {
    display: none;
    background-color: var(--pink);
    width: 126px;
    margin: 1rem auto;
    height: 48px;
    border-radius: 18px;
    color: var(--white2);
    display: flex;
    align-items: center;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    justify-content: center;
    border: none;
    cursor: pointer;
  }
`;

const NoLocationsMsg = styled.p`
  text-align: center;
  margin-left: 1rem;
  font-size: 14px;
  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const GuestsData = styled.section`
  margin: 0 auto;
  text-align: center;
  font-family: var(--paragraphs);
  @media (min-width: 1024px) {
    text-align: left;
    margin-left: 32%;
  }
`;

const GuestsDataCtn = styled.div``;

const GuestDataTitle = styled.p`
  font-weight: 700;
  color: var(--black);
`;

const GuestDataSubTitle = styled.p`
  font-weight: 400;
  color: var(--gray);
`;

const GuestDataCounterCtn = styled.div`
  display: flex;
  padding: 1rem 0;
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) {
    display: flex;
    align-items: left;
    justify-content: left;
  }
`;

const GuestCounterReduce = styled.button`
  width: 23px;
  height: 23px;
  border: 1px solid var(--gray2);
  margin-right: 1rem;
  background-color: transparent;
  border-radius: 4px;
  cursor: pointer;
`;

const GuestCounterQuantity = styled.p`
  color: var(--black);
  font-weight: 700;
`;

const GuestCounterAdd = styled.button`
  width: 23px;
  height: 23px;
  border: 1px solid var(--gray2);
  margin-left: 1rem;
  background-color: transparent;
  border-radius: 4px;
  cursor: pointer;
`;

export default function SearchModal({
  setOpenModal,
  openModal,
  form,
  setForm,
  locations,
  setSearch,
}) {
  const [locationData, setLocationData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(false);
  const [selectedInput, setSelectedInput] = useState(null);
  const [childrenCounter, setChildrenCounter] = useState(0);
  const [adultCounter, setAdultCounter] = useState(0);

  useEffect(() => {
    setLocationData(
      locations.filter(
        (elem) =>
          elem.city.toLowerCase() === form.location.toLowerCase() ||
          elem.country.toLowerCase() === form.location.toLowerCase()
      )
    );
    locationData.length === 0
      ? setSelectedLocation(false)
      : setSelectedLocation(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.location, locations, setLocationData]);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleLocationClick = (event) => {
    form.location = event.target.innerText;
    setSelectedLocation(true);
  };

  const locationSelected = () => {
    setSelectedInput("location");
  };

  const guestsSelected = () => {
    setSelectedInput("guests");
  };

  const reduceAdultCounter = () => {
    if (adultCounter >= 1) {
      setAdultCounter(adultCounter - 1);
    }
  };

  const increaseAdultCounter = () => {
    setAdultCounter(adultCounter + 1);
  };

  const reduceChildrenCounter = () => {
    if (childrenCounter >= 1) {
      setChildrenCounter(childrenCounter - 1);
    }
  };

  const increaseChildrenCounter = () => {
    setChildrenCounter(childrenCounter + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenModal(false);
    setSearch(true);
  };

  return (
    <>
      <Overlay
        openModal={openModal}
        onClick={() => setOpenModal(false)}
      ></Overlay>

      <SearchCtn openModal={openModal}>
        <SearchHeader>
          <SearchTitle>Edit your search</SearchTitle>
          <SearchCloseButton onClick={() => setOpenModal(false)}>
            <CloseIcon />
          </SearchCloseButton>
        </SearchHeader>
        <SearchInputCtn>
          <InputCtnTop className="search-input-ctn">
            <SearchLabel htmlFor="location">Location</SearchLabel>
            <input
              id="location"
              name="location"
              type="text"
              placeholder="Add Location"
              className="search-input"
              value={form.location}
              onChange={handleChange}
              onFocus={locationSelected}
              required
            />
          </InputCtnTop>
          <InputCtnBottom className="search-input-ctn">
            <SearchLabel htmlFor="location">Guests</SearchLabel>
            <input
              id="guests"
              name="guests"
              type="number"
              placeholder="Add guests"
              className="search-input"
              value={form.guests}
              onChange={handleChange}
              onFocus={guestsSelected}
              required
            />
          </InputCtnBottom>
          <SearchButtonRow onClick={handleSubmit} disabled={!selectedLocation}>
            <SearchIcon fontSize="small" />
            Search
          </SearchButtonRow>
        </SearchInputCtn>

        {(locationData.length !== 0 || selectedLocation !== false) &&
        selectedInput === "location" ? (
          <>
            {locationData.map((elem, index) => {
              return (
                <div key={index}>
                  <SearchLocationsCtn>
                    <PinIcon>
                      <PinDropIcon />
                    </PinIcon>

                    <SearchLocationList onClick={handleLocationClick}>
                      {elem.city}, {elem.country}
                    </SearchLocationList>
                  </SearchLocationsCtn>
                </div>
              );
            })}
          </>
        ) : (
          <>
            {selectedInput === "location" && (
              <NoLocationsMsg>No locations found</NoLocationsMsg>
            )}
          </>
        )}

        {selectedInput === "guests" && (
          <GuestsData>
            <GuestsDataCtn>
              <GuestDataTitle>Adults</GuestDataTitle>
              <GuestDataSubTitle>Ages 13 or above</GuestDataSubTitle>
              <GuestDataCounterCtn>
                <GuestCounterReduce type="button" onClick={reduceAdultCounter}>
                  -
                </GuestCounterReduce>
                <GuestCounterQuantity>{adultCounter}</GuestCounterQuantity>
                <GuestCounterAdd type="button" onClick={increaseAdultCounter}>
                  +
                </GuestCounterAdd>
              </GuestDataCounterCtn>
            </GuestsDataCtn>
            <GuestsDataCtn>
              <GuestDataTitle>Children</GuestDataTitle>
              <GuestDataSubTitle>Ages 2 - 12</GuestDataSubTitle>
              <GuestDataCounterCtn>
                <GuestCounterReduce
                  type="button"
                  onClick={reduceChildrenCounter}
                >
                  -
                </GuestCounterReduce>
                <GuestCounterQuantity>{childrenCounter}</GuestCounterQuantity>
                <GuestCounterAdd
                  type="button"
                  onClick={increaseChildrenCounter}
                >
                  +
                </GuestCounterAdd>
              </GuestDataCounterCtn>
            </GuestsDataCtn>
          </GuestsData>
        )}

        <SearchButton onClick={handleSubmit} disabled={!selectedLocation}>
          <SearchIcon fontSize="small" />
          Search
        </SearchButton>
      </SearchCtn>
    </>
  );
}
