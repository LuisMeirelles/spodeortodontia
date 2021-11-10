import styled from 'styled-components';
import { Link as RRDLink } from 'react-router-dom';

export const Link = styled(RRDLink)`
    text-decoration: none;
    border-top: 2px solid transparent;
    border-top-color: ${({ match }) => match && 'var(--color-primary-dark)'};
`;
