import { useState } from 'react';

import {
    Article,
    Aside,
    LinkItem,
    Menu
} from './styles';

import RichMarkdownEditor from 'rich-markdown-editor';

import api from '../../services/api';

import editorDictionary from '../../assets/misc/editorDictionary.json';

const CreatePost = () => {
    const [post, setPost] = useState('');

    const savePost = async () => {
        try {
            const { data } = await api.post('/posts', { post });

            alert(data.message);
        } catch (error) {
            alert(error.message);

            console.log({ ...error });
        }
    };

    return (
        <>
            <Aside>
                <Menu>
                    {
                        post.split('## ')
                            .slice(1, post.length)
                            .map((value, index) => (
                                <li key={index}>
                                    <LinkItem href="#">
                                        {value.split('\n\n')[0]}
                                    </LinkItem>
                                </li>
                            ))
                    }
                </Menu>
            </Aside>
            <Article>
                <RichMarkdownEditor onSave={savePost} onChange={evt => setPost(evt())} dictionary={editorDictionary} placeholder="" />
            </Article>
        </>
    );
};

export default CreatePost;
