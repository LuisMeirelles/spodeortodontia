import {
    useEffect,
    useState
} from 'react';

import ReactMarkdown from 'react-markdown';

import {
    Article,
    Card
} from './styles';

import api from '../../services/api';

const Home = () => {
    const [posts, setPosts] = useState();

    useEffect(() => {
        let isMounted = true;

        const fetch = async () => {
            try {
                const { data } = await api.get('/posts');

                setPosts(data.posts);
            } catch (error) {
                alert(error.message);
                console.log({ ...error });
            }
        };

        if (isMounted) {
            fetch();
        }

        return () => isMounted = false;
    }, []);

    return (
        <Article>
            {posts?.map(post => (
                <Card
                    key={post.id}
                    to={`/post/${post.id}`}
                >
                    <h1>{post.title}</h1>
                    <div>
                        <ReactMarkdown>{post.description || '<Sem Descrição>'}</ReactMarkdown>
                    </div>
                </Card>
            ))}
        </Article>
    );
};

export default Home;
