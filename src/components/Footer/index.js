import React from 'react';
import {
    FaFacebook, 
    FaInstagram, 
    FaGithub, 
    FaLinkedin
} from 'react-icons/fa';
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
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Sobre el juego </FooterLinkTitle>
                        <FooterLink href="https://clashofclans.com/es/blog/" target="_blank">Página oficial</FooterLink>
                        <FooterLink href="https://clashofclans.com/es/blog/community/clashofclans-present-and-future.html" target="_blank">Algunos datos</FooterLink>
                        <FooterLink href="https://www.youtube.com/watch?v=DDY6KjQCMoQ" target="_blank">Videos</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Sobre el API</FooterLinkTitle>
                        <FooterLink href="https://developer.clashofclans.com/#/" target="_blank">Página oficial</FooterLink>
                        <FooterLink href="https://developer.clashofclans.com/#/getting-started" target="_blank">Algunos datos</FooterLink>
                        <FooterLink href="https://www.youtube.com/watch?v=DDY6KjQCMoQ" target="_blank">Videos</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Sobre mí </FooterLinkTitle>
                        <FooterLink href="https://github.com/KenyIsaac" target="_blank">Github</FooterLink>
                        <FooterLink href="https://kenyisaac.netlify.app/" target="_blank">Portafolio</FooterLink>
                        <FooterLink href="https://www.linkedin.com/in/keny-isaac-lovera" target="_blank">LinkedIn</FooterLink> 
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        Logo
                    </SocialLogo>
                    <WebsiteRight>Keny Isaac ® 2022 { new Date().getFullYear() } Todos los derechos reservados </WebsiteRight>
                    <SocialIcons>
                        <SocialIconLink 
                        href="https://www.facebook.com/" 
                        target="_blank" 
                        aria-label="Facebook"
                        >
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink 
                        href="https://instagram.com/kenyisaac" 
                        target="_blank" 
                        aria-label="Instagram"
                        >
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink 
                        href="https://www.linkedin.com/in/keny-isaac-lovera" 
                        target="_blank" 
                        aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink 
                        href="https://github.com/KenyIsaac" 
                        target="_blank" 
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