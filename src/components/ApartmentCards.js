import styled, { css } from "styled-components";
import StarIcon from "@mui/icons-material/Star";

const CardsCtn = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 1fr;
    justify-items: center;
  }
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }
`;
const ApartmentCard = styled.section`
  margin-bottom: 2rem;
  font-family: var(--title);
  width: 100%;
  max-width: 395px;
  @media (min-width: 768px) {
    width: 395px;
  }
`;
const ApartmentImage = styled.img`
  border-radius: 24px;
  height: 238.35px;
  width: 100%;
  max-width: 395px;
  @media (min-width: 768px) {
    width: 395px;
  }
`;
const ApartmentData = styled.section`
  padding-top: 0.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ApartmentType = styled.p`
  ${({ apartment }) =>
    apartment > 0
      ? css`
          padding: 0.4rem;
          font-weight: 700;
          color: var(--black2);
          font-size: 10px;
          border: 1px solid var(--black2);
          border-radius: 12px;
          text-align: center;
          text-transform: uppercase;
        `
      : css`
          display: none;
        `}
`;
const ApartmentDescription = styled.p`
  font-size: 12px;
  color: var(--gray2);
  font-weight: 500;
`;

const Icon = styled.span`
  color: var(--pink);
  margin-right: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ApartmentRating = styled.p`
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ApartmentTitle = styled.p`
  font-weight: 600;
  font-size: 14px;
  margin-top: 0.6rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export default function ApartmentCards({ apartments }) {
  return (
    <CardsCtn>
      {apartments.map((apartment, index) => (
        <ApartmentCard key={index}>
          <ApartmentImage
            src={apartment.img}
            title={apartment.title}
          ></ApartmentImage>
          <ApartmentData>
            <ApartmentType apartment={apartment.type.length}>
              {apartment.type}
            </ApartmentType>
            <ApartmentDescription>{apartment.description}</ApartmentDescription>
            <ApartmentRating>
              <Icon>
                <StarIcon fontSize="small"></StarIcon>
              </Icon>
              {apartment.rating}
            </ApartmentRating>
          </ApartmentData>
          <ApartmentTitle>{apartment.title}</ApartmentTitle>
        </ApartmentCard>
      ))}
    </CardsCtn>
  );
}
