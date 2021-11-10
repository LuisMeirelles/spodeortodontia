import { useNavigate } from 'react-router-dom';

import { Aside } from './styles';

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <Aside />
            <div>
                <button onClick={() => navigate('/post/1')}>ir para post 1</button>
            </div>
        </>
    );
};

export default Home;
