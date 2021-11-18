import styled from "styled-components/macro";

import {
  AiOutlineGithub,
  AiOutlineInbox,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: mediumvioletred;
  text-align: center;
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
`;

const AnchorLink = styled.a`
  color: black;
  font-size: 24px;
  display: flex;
  padding: 18px 12px 0px;
  &:hover {
    color: mediumvioletred;
  }
`;

function FooterContent() {
  return (
    <Wrapper>
      <Header>Contact my maker</Header>
      <ContactLinks>
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
      </ContactLinks>
    </Wrapper>
  );
}

export default FooterContent;
