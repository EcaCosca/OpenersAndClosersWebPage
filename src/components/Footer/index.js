import React from "react";
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinkWrapper, FooterLinkTitle, FooterLinkItems, FooterLink} from './FooterElements';

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinkWrapper>
          {/* Column 1 */}
            <FooterLinkItems>
              <FooterLinkTitle>This is the title</FooterLinkTitle>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
            </FooterLinkItems>
          {/* Column 2 */}
            <FooterLinkItems>
              <FooterLinkTitle>This is the title</FooterLinkTitle>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
          {/* Column 3 */}
            <FooterLinkItems>
              <FooterLinkTitle>This is the title</FooterLinkTitle>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
            </FooterLinkItems>
          {/* Column 4 */}
            <FooterLinkItems>
              <FooterLinkTitle>This is the title</FooterLinkTitle>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
          {/* Column 5 */}
            <FooterLinkItems>
              <FooterLinkTitle>This is the title</FooterLinkTitle>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;