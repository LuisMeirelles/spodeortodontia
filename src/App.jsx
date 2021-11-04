import GlobalStyle from './globalStyle';
import { Article, Aside, Footer, Header, LinkItem, Main, Menu, MenuItem, Paragraph, Subtitle, Title } from './styles';

const App = () => (
    <>
        <GlobalStyle />

        <Header>
            <Title>TÍTULO</Title>
            <Subtitle>SUBTÍTULO</Subtitle>
        </Header>
        <Main>
            <Aside>
                <Menu>
                    <MenuItem><LinkItem href="/">Teste</LinkItem></MenuItem>
                    <MenuItem><LinkItem href="/">Teste</LinkItem></MenuItem>
                    <MenuItem><LinkItem href="/">Teste</LinkItem></MenuItem>
                    <MenuItem><LinkItem href="/">Teste</LinkItem></MenuItem>
                </Menu>
            </Aside>
            <Article>
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex porro suscipit at voluptate, ab sint eos. Corporis cupiditate reiciendis eaque repudiandae impedit obcaecati illum suscipit reprehenderit error, qui minima officia!</Paragraph>
                <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ducimus molestiae architecto, dolores perspiciatis libero ratione quo praesentium voluptatum fuga inventore consequuntur culpa cumque quod excepturi debitis itaque error blanditiis.</Paragraph>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ipsa obcaecati maxime, natus animi exercitationem ab rem placeat iure, excepturi dolor quasi voluptatem provident tenetur, ipsam nostrum atque quod voluptatibus.</Paragraph>
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vel fuga, optio ipsum quidem doloribus nulla maiores quas exercitationem provident, cupiditate, enim natus atque quasi repellat in tenetur est nobis.</Paragraph>
            </Article>
        </Main>
        <Footer>
            <p>{new Date().getFullYear()} —  &copy; Luis Meirelles</p>
        </Footer>
    </>
);

export default App;
