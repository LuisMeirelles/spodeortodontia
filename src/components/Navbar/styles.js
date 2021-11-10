import styled from 'styled-components';
import Link from '../NavLink';

export const Container = styled.nav`
    width: 100%;
    border-top: 1px solid var(--color-primary-dark);
    display: flex;
    justify-content: center;
    height: 2rem;
    position: sticky;
    top: 0;
    background-color: var(--color-tertiary);
`;

export const NavMenu = styled.ul`
    list-style: none;
    display: flex;
    height: 2rem;
`;

export const NavItem = styled.li`
    height: 2rem;
`;

export const NavLink = styled(Link)`
    padding: 0.5rem;
    display: block;
    height: 2rem;
    transition: border-top-color 0.3s;
    transform: translateY(-2px);

    :hover,
    :focus {
        border-top-color: var(--color-primary-dark);
    }
`;
