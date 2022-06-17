import React from 'react';
import {
    FaFacebook, 
    FaInstagram, 
    FaGithub, 
    FaLinkedin
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRight,
    SocialIcons,
    SocialIconLink,
} from './FooterElements';

const Footer = () => {
    const toggleHome = () =>{
        scroll.scrollToTop();
    }
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Sobre el juego </FooterLinkTitle>
                        <FooterLink to="/">Página oficial</FooterLink>
                        <FooterLink to="/">Algunos datos</FooterLink>
                        <FooterLink to="/">Videos</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Sobre el API</FooterLinkTitle>
                        <FooterLink to="/">Página oficial</FooterLink>
                        <FooterLink to="/">Algunos datos</FooterLink>
                        <FooterLink to="/">Videos</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Sobre mí </FooterLinkTitle>
                        <FooterLink to="/">Github</FooterLink>
                        <FooterLink to="/">Portafolio</FooterLink>
                        <FooterLink to="/">LinkedIn</FooterLink> 
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                    Clash of clans
                    </SocialLogo>
                    <WebsiteRight>Keny Isaac ® 2022 { new Date().getFullYear() } Todos los derechos reservados </WebsiteRight>
                    <SocialIcons>
                        <SocialIconLink 
                        to="/" 
                        aria-label="Facebook"
                        >
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink 
                        to="/" 
                        aria-label="Instagram"
                        >
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink 
                        to="/" 
                        aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink 
                        to="/" 
                        aria-label="GitHub"
                        >
                            <FaGithub />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer