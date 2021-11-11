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
    background-color: var(--color-primary);
    color: var(--color-secondary);

    & + & {
        margin-top: 1rem;
    }

    div {
        max-height: 3.5rem;
        overflow-y: hidden;

        p {
            text-indent: 1rem;
        }
    }
`;
