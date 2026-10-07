import React from "react";
import styled from "styled-components";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Bio } from "../../data/constants";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    @media (max-width: 960px) {
        padding: 0px;
    }
    padding-top: 80px;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 0px 0px 80px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const ContactCard = styled.div`
    width: 95%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.card};
    padding: 32px;
    border-radius: 16px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    margin-top: 28px;
    gap: 16px;
    box-sizing: border-box;
`;

const ContactTitle = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
`;

const EmailText = styled.a`
    font-size: 18px;
    color: ${({ theme }) => theme.text_secondary};
    text-decoration: none;
    word-break: break-all;
    text-align: center;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

const ContactButton = styled.a`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    box-sizing: border-box;
    text-decoration: none;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    padding: 13px 16px;
    border-radius: 12px;
    color: ${({ theme }) => theme.text_primary};
    font-size: 18px;
    font-weight: 600;
    transition: transform 0.2s ease-in-out;
    &:hover {
        transform: scale(1.02);
    }
`;

const SocialLinks = styled.div`
    display: flex;
    gap: 20px;
`;

const SocialLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-size: 1.5rem;
    transition: color 0.2s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

const Contact = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Contact</Title>
                <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
                <ContactCard>
                    <ContactTitle>Email Me 🚀</ContactTitle>
                    <EmailText href={`mailto:${Bio.email}`}>{Bio.email}</EmailText>
                    <ContactButton href={`mailto:${Bio.email}`}>
                        <Email /> Send me an email
                    </ContactButton>
                    <SocialLinks>
                        <SocialLink href={Bio.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <LinkedIn fontSize="inherit" />
                        </SocialLink>
                        <SocialLink href={Bio.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                            <GitHub fontSize="inherit" />
                        </SocialLink>
                    </SocialLinks>
                </ContactCard>
            </Wrapper>
        </Container>
    );
};

export default Contact;
