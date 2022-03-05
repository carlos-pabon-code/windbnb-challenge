import styled from "styled-components";

const FooterCtn = styled.footer`
  width: 100%;
  height: 60px;
  background-color: var(--white2);
  display: flex;
  text-align: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  font-family: var(--title);
`;
const FooterText = styled.footer`
  font-size: 14px;

  font-weight: 500;
  color: var(--gray2);
  padding: 1rem;
`;

const Accent = styled.span`
  font-weight: 700;
`;

export default function Footer() {
  return (
    <FooterCtn>
      <FooterText>
        created by <Accent>carlos.pabon.code</Accent> - devChallenges.io
      </FooterText>
    </FooterCtn>
  );
}
