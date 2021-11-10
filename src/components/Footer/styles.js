import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary);
    color: var(--color-tertiary);
    height: 3rem;
    padding: 1rem;

    a {
        font-weight: bolder;
        color: var(--color-tertiary);
    }
`;
