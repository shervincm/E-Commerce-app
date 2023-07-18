import {useNavigate} from 'react-router-dom';
import './home.css'
import home from '../../Images/home.png';

function Home() {

    const navigate = useNavigate();

    function homeClick() {
      navigate('/');
      window.location.reload();
    }
  return (
    <div>
      <button className='home-button' onClick={homeClick}><img src={home} alt='Home'/></button>
    </div>
  );
}

export default Home;