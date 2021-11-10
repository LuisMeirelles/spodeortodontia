import {
    Container,
    HeaderSection,
    Logo
} from './styles';

import logo from '../../assets/images/logo.png';

const Header = () => (
    <Container>
        <Logo src={logo} alt="Logo" />

        <HeaderSection>
            <h1>Contato</h1>
            <p><a href="tel:+555535229244">(55) 3522-9244</a></p>
            <p><a href="mailto:luis.gustavo.souto.meirelles@gmail.com">luis.gustavo.souto.meirelles@gmail.com</a></p>
        </HeaderSection>

        <HeaderSection>
            <h1>Endereço</h1>
            <p><a href="https://www.google.com/maps/place/Av.+J%C3%BAlio+de+Castilhos,+525+-+Centro,+Tr%C3%AAs+Passos+-+RS,+98600-000/@-27.456284,-53.9301123,21z/data=!4m5!3m4!1s0x94fbe7ec92756c63:0x52fcc3853742698a!8m2!3d-27.4563304!4d-53.9301748">Av. Júlio de Castilhos, 525 - Centro, Três Passos</a></p>
        </HeaderSection>
    </Container>
);

export default Header;
