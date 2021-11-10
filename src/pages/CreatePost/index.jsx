import { useState } from 'react';

import {
    Article,
    Aside,
    Menu
} from './styles';

import RichMarkdownEditor from 'rich-markdown-editor';

import editorDictionary from '../../assets/misc/editorDictionary.json';

const CreatePost = () => {
    const [post, setPost] = useState();

    return (
        <>
            <Aside>
                <Menu>
                    {/* {post?.sections.map(({ title, id }) => (
                        <MenuItem key={id}><LinkItem href={`#${id}`}>{title}</LinkItem></MenuItem>
                    ))} */}
                </Menu>
            </Aside>
            <Article>
                <RichMarkdownEditor onSave={() => console.log(post)} onChange={evt => setPost(evt())} dictionary={editorDictionary} placeholder="" />
            </Article>
        </>
    );
};

export default CreatePost;
