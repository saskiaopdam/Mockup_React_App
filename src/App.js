import { HashRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

import styled from "styled-components/macro";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import SlideMenu from "./components/SlideMenu";
import Home from "./components/Home";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import FooterContent from "./components/FooterContent";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  padding: 20px;
`;

const Main = styled.main`
  background: mediumvioletred;
  flex-grow: 1;
  padding: 20px;
  display: flex;
  margin-top: 68px;
`;

const Footer = styled.footer`
  flex-shrink: 0;
  padding: 20px;
`;

const Inner = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
`;

function App() {
  const [open, setOpen] = useState(false);
  console.log(`open: ${open}`);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <Router>
        <ScrollToTop>
          <Header open={open}>
            <Inner>
              <Navbar open={open} setOpen={setOpen} toggleMenu={toggleMenu} />
            </Inner>
          </Header>
          <Main>
            <Inner>
              <SlideMenu
                open={open}
                setOpen={setOpen}
                toggleMenu={toggleMenu}
              />
              <Route exact path="/" component={Home} />
              <Route path="/page1" component={Page1} />
              <Route path="/page2" exact component={Page2} />
            </Inner>
          </Main>
          <Footer>
            <Inner>
              <FooterContent />
            </Inner>
          </Footer>
        </ScrollToTop>
      </Router>
    </Wrapper>
  );
}

export default App;
