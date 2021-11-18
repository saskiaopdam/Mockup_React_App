import { NavLink } from "react-router-dom";

import styled from "styled-components/macro";

import {
  AiOutlineGithub,
  AiOutlineInbox,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Wrapper = styled.nav`
  position: fixed;
  top: 68px;
  bottom: 0;
  left: -100%;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  z-index: 1;
  background: ${({ open }) => (open ? "mediumvioletred" : "white")};
  transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0%)")};

  transition: transform 0.7s ease, background 0.7s ease;
  @media (min-width: 500px) {
    display: none;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding-left: 24px;
  & + & {
    padding-top: 24px;
  }
  &.selected {
    pointer-events: none;
    opacity: 1;
  }
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

const AnchorLink = styled.a`
  color: white;
  font-size: 24px;
  padding-top: 24px;
  padding-left: 24px;
  display: flex;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

function SlideMenu({ open, setOpen, toggleMenu }) {
  return (
    <Wrapper open={open} setOpen={setOpen} onClick={toggleMenu}>
      <Links>
        <StyledNavLink exact to="/" activeClassName="selected">
          Home
        </StyledNavLink>
        <StyledNavLink to="/page1" activeClassName="selected">
          Page 1
        </StyledNavLink>
        <StyledNavLink to="/page2" activeClassName="selected">
          Page 2
        </StyledNavLink>

        <AnchorLink
          href="mailto:opdamsaskia@icloud.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInbox aria-label="e-mail" />
        </AnchorLink>
        <AnchorLink
          href="https://www.linkedin.com/in/saskiaopdam/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineLinkedin aria-label="linkedin" />
        </AnchorLink>
        <AnchorLink
          href="https://github.com/saskiaopdam"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub aria-label="github" />
        </AnchorLink>
      </Links>
      <small>© 2021 Saskia Opdam</small>
    </Wrapper>
  );
}

export default SlideMenu;
