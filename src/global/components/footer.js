import '../global.scss';
import PromLogo from '../../assets/logo1.png';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { FontAwesome } from "react-icons/fa";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer (){
    return (
      <section className='row footer'>
        <div className='footer row flex-start more'>
            <div className ='column flex-start more'>
                <h1 className = 'vertical-text f1 footer fire2'>Project</h1>
            </div>
         <h2 className ='f1 footer'>Prometheus</h2>
        </div>
        <div className ='row footicons'>
        <FaInstagram className='icon'/>
        <FaTwitter className='icon'/>
        <FaGithub className='icon'/>
        <FaLinkedin className='icon'/>
        </div>
      </section>

  
      
    );
}



export default Footer;