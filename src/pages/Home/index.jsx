import {
    useEffect,
    useState
} from 'react';

import {
    Article,
    Card
} from './styles';

import postsMock from '../../assets/misc/postsMock.json';
import ReactMarkdown from 'react-markdown';

const Home = () => {
    const [posts, setPosts] = useState();

    useEffect(() => {
        setTimeout(() => {
            setPosts(postsMock);
        }, 500);
    }, []);

    return (
        <>
            {/* <Aside /> */}
            <Article>
                {posts?.map(post => (
                    <Card to={`/post/${post.id}`}>
                        <h1>{post.title}</h1>
                        <div>
                            <ReactMarkdown>{post.description || '<Sem Descrição>'}</ReactMarkdown>
                        </div>
                    </Card>
                ))}
            </Article>
        </>
    );
};

export default Home;
