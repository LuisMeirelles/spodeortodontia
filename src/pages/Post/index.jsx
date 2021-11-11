import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import api from '../../services/api';

import {
    Article,
    Aside,
    LinkItem,
    Menu,
    MenuItem,
    Section
} from './styles';

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState({
        title: '',
        sections: []
    });

    useEffect(() => {
        let isMounted = true;

        const fetch = async () => {
            try {
                const { data } = await api.get(`/posts/${id}`);

                setPost(data.post);
            } catch (error) {
                alert(error.message);

                console.log({ ...error });
            }
        }

        if (isMounted) {
            fetch();
        }

        return () => isMounted = false;
    });

    return (
        <>
            <Aside>
                <Menu>
                    {post.sections.map(({ title, id }) => (
                        <MenuItem key={id}><LinkItem href={`#${id}`}>{title}</LinkItem></MenuItem>
                    ))}
                </Menu>
            </Aside>
            <Article>
                <h1>{post.title}</h1>
                <Section>
                    <ReactMarkdown>{post.description}</ReactMarkdown>
                </Section>
                {post.sections.map(({ title, content, id }) => (
                    <Section key={id} id={id}>
                        <h2>{title}</h2>
                        <ReactMarkdown>
                            {content}
                        </ReactMarkdown>
                    </Section>
                ))}
            </Article>
        </>
    );
};

export default Post;
