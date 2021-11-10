import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Article = styled.article`
    width: 75%;
    margin: 1rem;
`;

export const Aside = styled.aside`
    width: 25vw;
    height: calc(100vh - 7rem);
    margin-top: 2rem;
    position: sticky;
    top: 4rem;
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
        overflow: hidden;

        p {
            text-indent: 1rem;
            text-overflow: ellipsis;
            width: 100%;
            overflow: hidden;
        }
    }
`;
