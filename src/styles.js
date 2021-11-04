import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    background: #D6D6D6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`;

export const Title = styled.h1`
    text-align: center;
`;

export const Subtitle = styled.h2`
    text-align: center;
`;

export const Main = styled.main`
    flex-grow: 1;
    display: flex;
`;

export const Aside = styled.aside`
    width: 25vw;
    flex-grow: 1;
    margin-right: 1rem;
`;

export const Menu = styled.ul`
    list-style: none;
`;

export const MenuItem = styled.li`
    transition: background-color 0.3s;

    :hover,
    :focus-within {
        background-color: #c2c2c2;
    }
`;

export const LinkItem = styled.a`
    width: 100%;
    display: block;
    text-decoration: none;
    color: #000000;
    padding: 0.5rem;
`;

export const Article = styled.article`
    flex-grow: 1;
`;

export const Paragraph = styled.p`
    margin-bottom: 0.5rem;
`;

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #D6D6D6;
    padding: 1rem;
`;
