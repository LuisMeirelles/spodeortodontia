import GlobalStyle from './globalStyle';
import {
    Article,
    Aside,
    Footer,
    Header,
    LinkItem,
    Main,
    Menu,
    MenuItem,
    Navbar,
    NavItem,
    NavLink,
    NavMenu,
    Paragraph,
    Section,
    Subtitle,
    Title,
    SectionTitle
} from './styles';

const App = () => (
    <>
        <GlobalStyle />

        <Header>
            <Title>Aparelho dentário</Title>
            <Subtitle>Tipos, quando é indicado e cuidados</Subtitle>
        </Header>
        <Navbar>
            <NavMenu>
                <NavItem><NavLink href="/">Menu</NavLink></NavItem>
                <NavItem><NavLink href="/">Outro Menu</NavLink></NavItem>
                <NavItem><NavLink href="/">Mais Um Menu</NavLink></NavItem>
            </NavMenu>
        </Navbar>
        <Main>
            <Aside>
                <Menu>
                    <MenuItem><LinkItem href="#quando-e-indicado">Quando é indicado?</LinkItem></MenuItem>
                    <MenuItem><LinkItem href="#tipos-de-aparelhos-dentarios">Tipos de aparelhos dentários</LinkItem></MenuItem>
                </Menu>
            </Aside>
            <Article>
                <Section>
                    <Paragraph>O aparelho dentário, também chamado de aparelho ortodôntico, é utilizado para corrigir dentes tortos e desalinhados, corrigir a mordida cruzada e prevenir a oclusão dentária, que é quando os dentes superiores e inferiores se tocam ao fechar a boca. O tempo de uso do aparelho depende do objetivo do uso e da gravidade do problema, podendo variar de meses a anos. É importante que problemas na gengiva ou nos dentes sejam solucionados antes do aparelho ser colocado.</Paragraph>
                    <Paragraph>Após a colocação do aparelho é importante realizar a higiene bucal de forma correta, utilizando fio dental e uma escova interdental, além de ir a consultas periódicas com o dentista para que possa ser feita a manutenção do aparelho.</Paragraph>
                </Section>

                <Section id="quando-e-indicado">
                    <SectionTitle>Quando é indicado</SectionTitle>

                    <Paragraph>O uso do aparelho dentário tem como principal objetivo melhorar o sorriso, podendo ser indicado para:</Paragraph>

                    <ul>
                        <li>Corrigir a mordida;</li>
                        <li>Alinhar os dentes;</li>
                        <li>Corrigir dentes separados;</li>
                        <li>Prevenir a oclusão dentária.</li>
                    </ul>

                    <Paragraph>Além disso, o uso de aparelho também pode ser indicado quando a pessoa apresenta dor na mandíbula ou quando a criança tem dificuldade para falar.</Paragraph>
                </Section>

                <Section id="tipos-de-aparelhos-dentarios">
                    <SectionTitle>Tipos de aparelhos dentários</SectionTitle>

                    <Paragraph>O tipo de aparelho dentário a ser utilizado pode variar com a idade e objetivo do uso, podendo ser indicado pelo dentista ou ortodontista os seguintes tipos:</Paragraph>

                    <ol>
                        <h3><li>Aparelho fixo</li></h3>
                        <Paragraph>Os aparelhos fixos são utilizados para promover o alinhamento dos dentes, o que é feito por meio de força mecânica que movimenta os dentes, colocando-os no lugar. Esse tipo de aparelho requer maior cuidado na hora da higienização bucal, devendo ser utilizado fio dental e uma escova interdental para evitar o acúmulo de comida e a formação de placas bacterianas. As pessoas que usam esse tipo de aparelho devem ir ao ortodontista mensalmente para fazer a manutenção do aparelho.</Paragraph>
                        <h3><li>Aparelho fixo estético</li></h3>
                        <Paragraph>Esse tipo de aparelho também é utilizado para endireitar os dentes é igual ao aparelho fixo comum, sendo constituído por fios e braquetes (popularmente conhecidos como quadradinhos), no entanto são mais discretos, já que são feitos com um material mais transparente, como porcelana ou safira, possuindo um preço mais elevado.</Paragraph>
                        <Paragraph>O aparelho fixo estético que contém os quadradinhos de porcelana são resistentes e possuem o preço mais acessível que o de safira, que é ainda mais transparente, ficando praticamente invisível junto do dente.</Paragraph>
                    </ol>
                </Section>
            </Article>
        </Main>
        <Footer>
            <p>{new Date().getFullYear()} &copy; Luis Meirelles</p>
        </Footer>
    </>
);

export default App;
