import styled from "styled-components";
import ApartmentCards from "./ApartmentCards";
import ApartmentMobile1 from "../assets/mobile/apartment1.jpg";
import ApartmentMobile2 from "../assets/mobile/apartment2.jpg";
import ApartmentMobile3 from "../assets/mobile/apartment3.jpg";
import ApartmentMobile4 from "../assets/mobile/apartment4.jpg";
import ApartmentMobile5 from "../assets/mobile/apartment5.jpg";
import ApartmentMobile6 from "../assets/mobile/apartment6.jpg";

const apartments = [
  {
    title: "Stylish apartment in center of the city",
    img: ApartmentMobile1,
    type: "Super host",
    description: "Entire apartment . 2 beds",
    rating: "4.40",
  },
  {
    title: "Cozy, peaceful and private room with two dogs included",
    img: ApartmentMobile2,
    type: "",
    description: "Private room",
    rating: "4.25",
  },
  {
    title: "Modern House in a remote area",
    img: ApartmentMobile3,
    type: "",
    description: "Entire house",
    rating: "4.96",
  },
  {
    title: "Stylish room in design district",
    img: ApartmentMobile4,
    type: "Super host",
    description: "Entire apartment . 2 beds",
    rating: "4.85",
  },
  {
    title: "Modern apartment close to nature",
    img: ApartmentMobile5,
    type: "",
    description: "Private room",
    rating: "4.54",
  },
  {
    title: "House in a remote area",
    img: ApartmentMobile6,
    type: "",
    description: "Entire house",
    rating: "4.64",
  },
];

const ApartmentCtn = styled.section`
  margin: 5rem 0.3rem;
  padding: 1rem;
`;

const ApartmentHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--title);
  margin: 1rem 0px;
  @media (min-width: 600px) {
    margin: 0px 2rem;
  }
  @media (min-width: 1440px) {
    margin: 0px 7rem;
  }
`;

const ApartmentTitle = styled.section`
  font-weight: 700;
  font-size: 18px;
  color: var(--black);
`;
const ApartmentStays = styled.section`
  font-size: 14px;
  font-weight: 500;
  color: var(--black2);
`;

export default function Apartments() {
  return (
    <ApartmentCtn>
      <ApartmentHeader>
        <ApartmentTitle>Stays in Finland</ApartmentTitle>
        <ApartmentStays>12+ stays</ApartmentStays>
      </ApartmentHeader>
      <ApartmentCards apartments={apartments} />
    </ApartmentCtn>
  );
}
