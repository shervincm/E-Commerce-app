import {useNavigate} from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    function homeClick() {
      navigate('/');
    }
  return (
    <div>
      <button onClick={homeClick}>Home</button>
    </div>
  );
}

export default Home;