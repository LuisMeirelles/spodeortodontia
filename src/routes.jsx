import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import {
    Chat,
    CreatePost,
    Home,
    Post
} from './pages';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="criar-post" element={<CreatePost />} />
                <Route path="post/:id" element={<Post />} />
                <Route path="chat" element={<Chat />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;
