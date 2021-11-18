import styled from "styled-components/macro";

import flowers from "../assets/flowers.jpg";

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

function Page2() {
  return (
    <Wrapper>
      <Title>Page 2</Title>
      <Paragraph>
        My maker also likes to{" "}
        <AnchorLink
          href="https://www.behance.net/opdamsaski0505"
          target="_blank"
          rel="noreferrer"
        >
          experiment with photo-editing
        </AnchorLink>
        .
      </Paragraph>
      <a
        href="https://www.behance.net/opdamsaski0505"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={flowers} alt="photo-edited image of flowers and leaves" />
      </a>
      <Paragraph>
        The{" "}
        <AnchorLink
          href="https://github.com/saskiaopdam"
          target="_blank"
          rel="noreferrer"
        >
          Winc Academy exam projects
        </AnchorLink>{" "}
        are more technical than visually interesting, so my maker has skipped
        those here. You can see all code on GitHub.
      </Paragraph>
    </Wrapper>
  );
}

export default Page2;
