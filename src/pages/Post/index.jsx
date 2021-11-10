import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import posts from '../../assets/misc/postsMock.json';

import {
    Article,
    Aside,
    LinkItem,
    Menu,
    MenuItem,
    Section
} from './styles';

const Post = () => {
    const { id: postId } = useParams();
    const post = posts.find(value => value.id === Number.parseInt(postId));

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
