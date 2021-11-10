import styled from 'styled-components';

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
    padding: 0.5rem;
    transition: background-color 0.3s, color 0.3s;

    :hover,
    :focus {
        background-color: var(--color-secondary);
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
