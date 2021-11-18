import { Link } from "react-router-dom";
import { useState } from "react";

import styled from "styled-components/macro";

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

const Figure = styled.figure`
  position: relative;
  width: 100%;
  margin: 0 auto;
  & + & {
    margin-top: 20px;
  }
  &:hover {
    transform: scale(101%);
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Dummy = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 0 3px darkslateblue;
  border-radius: 10px;
  background: darkslateblue;
  color: white;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: mediumvioletred;
  border-radius: 10px;
  opacity: ${({
    page1Clicked,
    page2Clicked,
    page1MouseEnter,
    page2MouseEnter,
    page1MouseLeave,
    page2MouseLeave,
    visible,
  }) =>
    page1Clicked && visible
      ? "1"
      : page2Clicked && visible
      ? "1"
      : page1MouseEnter && visible
      ? "1"
      : page2MouseEnter && visible
      ? "1"
      : page1MouseLeave && visible
      ? "0"
      : page2MouseLeave && visible
      ? "0"
      : "0"};

  transition: opacity 0.3s ease;
`;

const StyledLink = styled(Link)`
  color: white;
  padding: 20px;
  &:hover {
    font-weight: bold;
  }
`;

function Home() {
  const [id, setId] = useState("");
  const [visible, setVisible] = useState(false);

  const handleClick = (event) => {
    setId(event.target.id);
    setVisible(!visible);
  };

  const handleMouseEnter = (event) => {
    setId(event.target.id);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  const page1MouseEnter = id === "page1";
  const page2MouseEnter = id === "page2";
  const page1MouseLeave = id === "page1";
  const page2MouseLeave = id === "page2";
  const page1Clicked = id === "page1";
  const page2Clicked = id === "page2";

  return (
    <Wrapper>
      <Title>Mockup React App</Title>
      <Paragraph>
        Hi there! I'm a single page react application. Inside me, you will find
        a router and a bunch of styled components. All made from scratch with
        just some css an javascript. Have a look around or checkout my{" "}
        <AnchorLink
          href="https://github.com/saskiaopdam/Mockup_React_App"
          target="_blank"
          rel="noreferrer"
        >
          code on GitHub
        </AnchorLink>
        .
      </Paragraph>

      <Figure>
        <Dummy>Click me / Mouse me</Dummy>
        <Overlay
          id="page1"
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          visible={visible}
          page1Clicked={page1Clicked}
          page1MouseEnter={page1MouseEnter}
          page1MouseLeave={page1MouseLeave}
        >
          <StyledLink to="/page1">Page 1</StyledLink>
        </Overlay>
      </Figure>

      <Figure>
        <Dummy>Click me / Mouse me</Dummy>
        <Overlay
          id="page2"
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          visible={visible}
          page2Clicked={page2Clicked}
          page2MouseEnter={page2MouseEnter}
          page2MouseLeave={page2MouseLeave}
        >
          <StyledLink to="/page2">Page 2</StyledLink>
        </Overlay>
      </Figure>
    </Wrapper>
  );
}

export default Home;
