import './Header.css'
import signature from '../../assets/pictures/milianoheader.png';


function Header(props) {
  return (
    <div className='header'>
        <img className='header-img' src={signature} alt="" />
    </div>
  );
}


export default Header;