import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    color: var(--color-tertiary);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    background-color: var(--color-primary);
`;

export const HeaderSection = styled.section`
    font-weight: 100;

    & + & {
        margin-left: 1rem;
    }

    h1 {
        font-size: 1rem;
        margin-bottom: 0.25rem;
    }

    p {
        font-size: 0.75rem;
    }

    a {
        color: var(--color-tertiary);
    }
`;

export const Logo = styled.img`
    width: 280px;
    margin: 0 1rem 0.5rem 0;
`;
