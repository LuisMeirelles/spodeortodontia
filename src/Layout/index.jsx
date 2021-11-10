import { Outlet } from 'react-router';

import {
    Footer,
    Header,
    Navbar
} from '../components';

import {
    Main
} from './styles';

const Layout = () => (
    <>
        <Header />
        <Navbar />
        <Main>
            <Outlet />
        </Main>
        <Footer />
    </>
);

export default Layout;
