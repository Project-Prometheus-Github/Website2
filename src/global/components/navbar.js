import '../global.scss';
import PromLogo from '../../assets/logo1.png';

function NavBar (){
    return (
      
      <div className='navbar row center-main f1'>
        <ClickableImage className='navbar' source={PromLogo} size={35} style={{position: 'relative', bottom: 1}}/>
        <a className='navbar'>Home</a> 
        <a className='navbar'>About Us</a>
        <a className='navbar'>Projects</a>
        <a className='navbar'>Articles</a>
        <a className='navbar'>Editorials</a>

      </div>
  
      
    );
}


function ClickableImage({ source, size, style }){
  return(
    <a className='navbar'><img className='spin' src={source} width={size} height={size} style={style}/></a>
  )
}

export default NavBar;