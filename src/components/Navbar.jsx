import { Link, NavLink } from "react-router-dom";

import styled from "styled-components/macro";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Brand = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: mediumvioletred;
`;

const Burger = styled.button`
  font-size: 24px;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: none;
  background: transparent;
  @media (min-width: 500px) {
    display: none;
  }
`;

const FullMenu = styled.div`
  flex-grow: 1;
  display: none;
  @media (min-width: 500px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  height: 28px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-left: 28px;
  &.selected {
    pointer-events: none;
    font-weight: bold;
  }
  &:hover {
    text-decoration: underline;
  }
`;

function NavBar({ open, setOpen, toggleMenu }) {
  return (
    <Wrapper>
      <StyledLink exact to="/">
        <Brand>Brand</Brand>
      </StyledLink>

      <Burger
        open={open}
        setOpen={setOpen}
        onClick={toggleMenu}
        aria-label={open ? "close the menu" : "open the menu"}
      >
        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
      </Burger>

      <FullMenu>
        <StyledNavLink exact to="/" activeClassName="selected">
          Home
        </StyledNavLink>
        <StyledNavLink to="/page1" activeClassName="selected">
          Page 1
        </StyledNavLink>
        <StyledNavLink to="/page2" activeClassName="selected">
          Page 2
        </StyledNavLink>
      </FullMenu>
    </Wrapper>
  );
}

export default NavBar;
