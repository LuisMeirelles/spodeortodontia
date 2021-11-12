import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Article = styled.article`
    width: 75%;
    margin: 1rem;
`;

export const Aside = styled.aside`
    width: 25vw;
    position: sticky;
    top: 2rem;
`;

export const Card = styled(Link)`
    display: block;
    width: 100%;
    padding: 1rem;
    border-top: 1px solid var(--color-primary);
    color: var(--color-primary);
    transition: color 0.2s, background-color 0.2s;

    :last-of-type {
        border-bottom: 1px solid var(--color-primary);
    }

    :focus,
    :hover {
        background-color: var(--color-primary);
        color: var(--color-secondary);
    }

    h1 {
        margin-bottom: 0.5;
    }

    div {
        max-height: 3.5rem;
        overflow-y: hidden;

        p {
            text-indent: 1rem;
        }
    }
`;
