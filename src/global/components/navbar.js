import '../global.scss';
import PromLogo from '../../assets/logo1.png';
import { Link } from 'react-router-dom';

function NavBar (){
    return (
      <section className='row center-main'>
        <div className='navbar row f1'>
          <Link className='navbar'>Home</Link> 
          <Link to='/about' className='navbar'>About Us</Link>
          <Link className='navbar'>Projects</Link>
          <Link className='navbar'>Articles</Link>
          <Link className='navbar'>Editorials</Link>

        </div>
      </section>

  
      
    );
}


function ClickableImage({ source, size, style }){
  return(
    <a className='navbar'><img className='spin' src={source} width={size} height={size} style={style}/></a>
  );
}

export default NavBar;