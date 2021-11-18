// import { useState } from "react";
// import { Link } from "react-router-dom";

// import styled from "styled-components/macro";

// //own-projects
// import toggle2 from "../assets/coding-projects/toggle2.png";
// import portfolio from "../assets/coding-projects/portfolio.png";

// //winc-projects
// import toggle1 from "../assets/winc-projects/toggle1.png";
// import dashboard from "../assets/winc-projects/student-dashboard.png";
// import website from "../assets/winc-projects/website.png";
// import moviefilter from "../assets/winc-projects/movie-filter.png";
// import playlist from "../assets/winc-projects/playlist.png";
// import portfoliogrid from "../assets/winc-projects/portfolio-grid.png";
// import mediabuttons from "../assets/winc-projects/media-buttons.png";
// import tdd from "../assets/winc-projects/tdd.png";
// import testimonial from "../assets/winc-projects/testimonial.png";
// import todolist from "../assets/winc-projects/todo-list.png";

// const Wrapper = styled.div`
//   flex-grow: 1;
//   display: flex;
//   flex-direction: column;
// `;

// const Title = styled.h1`
//   margin-top: 32px;
//   margin-bottom: 32px;
//   @media (min-width: 500px) {
//     text-align: center;
//   }
// `;

// const H2 = styled.h2`
//   margin-top: 52px;
//   margin-bottom: 52px;
//   color: darkgray;
//   &.firstchild {
//     margin-top: 0;
//   }
//   @media (min-width: 500px) {
//     text-align: center;
//   }
// `;

// const ImageRouteLink = styled(Link)`
//   text-decoration: none;
//   background: white;
//   color: black;
//   & + & {
//     margin-top: 32px;
//   }
//   @media (min-width: 500px) {
//     text-align: center;
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   max-width: 460px;
//   display: block;
//   margin: 0 auto;
// `;

// const Anchor = styled.a`
//   color: black;
//   text-decoration: none;
//   &:hover {
//     text-decoration: underline;
//     font-weight: bold;
//   }
// `;

// const Project = styled.div`
//   background: red;
// `;
// const Heading = styled.h2``;
// const Details = styled.p``;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    align-self: center;
  }
`;

const StyledLink = styled(Link)`
  margin-bottom: 8px;
  color: black;
  text-decoration: none;
  @media (min-width: 768px) {
    margin-bottom: 0;
    & + & {
      margin-left: 32px;
    }
  }
`;

const Hovereffect = styled.span`
  &:hover {
    font-weight: bold;
  }
`;

const Social = styled.div`
  padding: 12px 0;
  background: white;
  display: flex;
  flex-direction: column;
  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const IconAnchorLink = styled.a`
  text-decoration: none;
  background: white;
  color: black;
  display: flex;
  align-items: center;
  // flex-direction: column;
  font-size: 24px;
  & + & {
    margin-top: 24px;
  }
  @media (min-width: 500px) {
    margin-bottom: 0;
    & + & {
      margin-top: 0;
      margin-left: 36px;
    }
  }
`;

const Icon = styled.div`
  height: 24px;
  color: royalblue;
`;

const IconAnchorLabel = styled.p`
  font-size: 14px;
  margin-left: 4px;
`;

const ImageAnchorLabel = styled.p`
  color: royalblue;
  margin-bottom: 16px;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const Hovereffect = styled.span`
  &:hover {
    font-weight: bold;
  }
`;

const ImageAnchorLink = styled.a`
  text-decoration: none;
  background: white;
  color: black;
  // padding-top: 16px;
  margin-bottom: 32px;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 480px;
  display: block;
  margin: 16px 0;
  @media (min-width: 768px) {
    margin: 16px auto;
  }
`;

<ImageAnchorLink
  href="https://www.behance.net/opdamsaski0505"
  target="_blank"
  rel="noreferrer"
>
  <ImageAnchorLabel>
    <Hovereffect>overview</Hovereffect> {">"}
  </ImageAnchorLabel>
  <Image src={lemons} alt="screenshot of lemons project" />
</ImageAnchorLink>;

<div>
  {" "}
  <h2>Projects</h2>
  <Anchor
    href="https://github.com/saskiaopdam/React_Portfolio"
    target="_blank"
    rel="noreferrer"
  >
    portfolio *
  </Anchor>
  <Anchor href="https://toggle2.netlify.app" target="_blank" rel="noreferrer">
    toggle2 *
  </Anchor>
  <Anchor
    href="https://dashboard-wa.netlify.app"
    target="_blank"
    rel="noreferrer"
  >
    dashboard (just started, final front-end exam project)
  </Anchor>
  <Anchor
    href="https://playlist-wa.netlify.app"
    target="_blank"
    rel="noreferrer"
  >
    playlist
  </Anchor>
  <Anchor
    href="https://github.com/saskiaopdam/Winc_Assignment_6_TDD_testing"
    target="_blank"
    rel="noreferrer"
  >
    tdd
  </Anchor>
  <Anchor
    href="https://todolist-wa.netlify.app"
    target="_blank"
    rel="noreferrer"
  >
    todolist
  </Anchor>
  <Anchor
    href="https://moviefilter-wa.netlify.app"
    target="_blank"
    rel="noreferrer"
  >
    moviefilter
  </Anchor>
  <Anchor
    href="https://toggle1-wa.netlify.app"
    target="_blank"
    rel="noreferrer"
  >
    toggle1
  </Anchor>
  <Anchor
    href="https://mediabuttons-wa.netlify.app"
    target="_blank"
    rel="noreferrer"
  >
    mediabuttons
  </Anchor>
  <Anchor
    href="https://portfoliogrid-wa.netlify.app"
    target="_blank"
    rel="noreferrer"
  >
    portfoliogrid
  </Anchor>
  <Anchor
    href="https://testimonial-wa.netlify.app"
    target="_blank"
    rel="noreferrer"
  >
    testimonial
  </Anchor>
  <Anchor
    href="https://website-wa.netlify.app"
    target="_blank"
    rel="noreferrer"
  >
    website
  </Anchor>
  <br />
  <p>* My own projects. The rest are Winc Academy exam projects.</p>
  <br />
  <h2>GitHub</h2>
  <Anchor
    href="https://github.com/saskiaopdam"
    target="_blank"
    rel="noreferrer"
  >
    All code is on GitHub
  </Anchor>
</div>;
