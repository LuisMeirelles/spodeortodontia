import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    background-color: var(--color-secondary-dark);
    color: var(--color-tertiary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`;

export const Title = styled.h1`
    text-align: center;
    color: var(--color-tertiary);
`;

export const Subtitle = styled.h2`
    text-align: center;
    color: var(--color-tertiary);
`;

export const Navbar = styled.nav`
    background-color: var(--color-secondary);
    display: flex;
    justify-content: center;
    height: 2rem;
    position: sticky;
    top: 0;
`;

export const NavMenu = styled.ul`
    list-style: none;
    display: flex;
    height: 2rem;
`;

export const NavItem = styled.li`
    height: 2rem;
`;

export const NavLink = styled.a`
    text-decoration: none;
    color: var(--color-tertiary);
    padding: 0.5rem;
    display: block;
    transition: background-color 0.3s;
    height: 2rem;

    :hover,
    :focus {
        background-color: var(--color-secondary-dark);
    }
`;

export const Main = styled.main`
    flex-grow: 1;
    display: flex;
`;

export const Aside = styled.aside`
    width: 25vw;
    height: calc(100vh - 7rem);
    margin-top: 2rem;
    position: sticky;
    top: 4rem;
`;

export const Menu = styled.ul`
    list-style: none;
`;

export const MenuItem = styled.li`
`;

export const LinkItem = styled.a`
    width: 100%;
    display: block;
    text-decoration: none;
    color: var(--color-primary);
    padding: 0.5rem;
    transition: background-color 0.3s;

    :hover,
    :focus {
        background-color: var(--color-secondary-dark);
        color: var(--color-tertiary);
    }
`;

export const Article = styled.article`
    flex-grow: 1;
    width: min-content;
    margin: 0.5rem 1rem 1rem 1rem;

    ul {
        margin: 1rem 0 1rem 2rem;
    }

    ol {
        margin: 1rem 0 1rem 1.5rem;
    }
`;

export const Section = styled.section`
    padding-top: 2rem;
`;

export const SectionTitle = styled.h2`
    margin-bottom: 0.5rem;
`;

export const Paragraph = styled.p`
    margin-bottom: 0.5rem;
    text-indent: 1.5rem;
`;

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-secondary-dark);
    color: var(--color-tertiary);
    height: 3rem;
    padding: 1rem;
`;
