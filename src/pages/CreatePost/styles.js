import styled from 'styled-components';

export const Aside = styled.aside`
    width: 25vw;
    position: sticky;
    top: 2rem;
`;

export const Menu = styled.ul`
    list-style: none;
`;

export const LinkItem = styled.a`
    width: 100%;
    display: block;
    padding: 0.5rem;
    color: #000000;
    transition: background-color 0.3s, color 0.3s;

    :hover,
    :focus {
        background-color: var(--color-primary);
        color: var(--color-secondary);
    }
`;

export const Article = styled.article`
    flex-grow: 1;
    width: min-content;
    margin: 1rem;

    div[contenteditable="true"] > p {
        text-indent: 1rem;
    }

    ul {
        margin: 1rem 0 1rem 1rem;
    }

    ol {
        margin: 1rem 0 1rem 1rem;
    }
`;

export const Section = styled.section`
    padding-top: 2rem;

    p {
        text-indent: 1rem;
    }

    h2 {
        margin-bottom: 0.5rem;
    }
`;
