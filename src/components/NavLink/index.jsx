import {
    useMatch,
    useResolvedPath
} from 'react-router';

import { Link } from './styles';

const NavLink = ({ children, to, ...rest }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                match={match}
                to={to}
                {...rest}
            >
                {children}
            </Link>
        </div>
    );
};

export default NavLink;
