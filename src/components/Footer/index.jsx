import { Container } from './styles';

const Footer = () => (
    <Container>
        <p>
            {new Date().getFullYear()}
            &nbsp;&copy;&nbsp;
            <a
                href="https://github.com/LuisMeirelles"
                target="_blank"
                rel="noopener noreferrer"
            >
                Luis Meirelles
            </a>
        </p>
    </Container>
);

export default Footer;
