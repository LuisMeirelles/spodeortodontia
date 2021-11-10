import {
    NavItem,
    NavLink,
    NavMenu,
    Container
} from './styles';

const Navbar = () => (
    <Container>
        <NavMenu>
            <NavItem><NavLink to="/">Página Inicial</NavLink></NavItem>
            <NavItem><NavLink to="/chat">Chat</NavLink></NavItem>
        </NavMenu>
    </Container>
);

export default Navbar;
