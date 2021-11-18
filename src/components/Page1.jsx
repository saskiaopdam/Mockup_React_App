import styled from "styled-components/macro";

import portrait from "../assets/portrait.jpg";

const Wrapper = styled.div`
  flex-grow: 1;
  background: white;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 16px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.25;
  margin: 0 auto 18px;
  text-align: justify;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const AnchorLink = styled.a`
  color: black;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Image = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto 20px;
  border-radius: 10px;
  box-shadow: 0 0 3px darkslateblue;
  &:hover {
    transform: scale(101%);
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`;

function Page1() {
  return (
    <Wrapper>
      <Title>Page 1</Title>
      <Paragraph>
        My maker is a freelance translator switching careers to development.
      </Paragraph>
      <Paragraph>
        She follows a{" "}
        <AnchorLink
          href="https://www.wincacademy.nl/opleidingen/full-stack-development"
          target="_blank"
          rel="noreferrer"
        >
          full-stack development
        </AnchorLink>{" "}
        course at Winc Academy.
      </Paragraph>
      <Paragraph>
        Her dream is to become a react master, and to dive into the back-end
        soon.
      </Paragraph>
      <Image src={portrait} alt="portrait photo of Saskia Opdam" />
    </Wrapper>
  );
}

export default Page1;
