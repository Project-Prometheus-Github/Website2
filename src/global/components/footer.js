import '../global.scss';
import PromLogo from '../../assets/logo1.png';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { FontAwesome } from "react-icons/fa";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Line from '../../global/components/horizontal-line.js';

function Footer (){
    return (
      <section className='row footer'>
          <div className='footer column'>
            <div className ='row texty'>
              <h1 className = 'f1 footer fire2'>Project</h1>
              <h2 className ='f1 footer'>Prometheus</h2>
            </div> 
            <Line color='#808080' height={3} width={359} className='footer-line'/>
            <div className ='row footicons'>
              <FaInstagram className='iconfooter'/>
              <FaTwitter className='iconfooter'/>
              <FaGithub className='iconfooter'/>
              <FaLinkedin className='iconfooter'/>
          </div>
          </div>
        <div className = 'row moref'>
        <div className = 'column keegan'>
          <h2 className ='f1 titlef'>About Us</h2>
            <div className = 'precise'>
              <h2 className ='f2 listf'>Our Mission</h2>
              <h2 className ='f2 listf'>The Team</h2>
              <h2 className ='f2 listf'>Sample Text</h2>
            </div>
        </div>

        <div className = 'column keegan'>
          <h2 className ='f1 titlef'>Articles</h2>
            <div className = 'precise'>
              <h2 className ='f2 listf'>Our Mission</h2>
              <h2 className ='f2 listf'>The Team</h2>
              <h2 className ='f2 listf'>Sample Text</h2>
            </div>
        </div>


        <div className = 'column keegan'>
          <h2 className ='f1 titlef'>Editorials</h2>
            <div className = 'precise'>
              <h2 className ='f2 listf'>Our Mission</h2>
              <h2 className ='f2 listf'>The Team</h2>
              <h2 className ='f2 listf'>Sample Text</h2>
            </div>
        </div>


        <div className = 'column keegan'>
          <h2 className ='f1 titlef'>CCC</h2>
            <div className = 'precise'>
              <h2 className ='f2 listf'>Our Mission</h2>
              <h2 className ='f2 listf'>The Team</h2>
              <h2 className ='f2 listf'>Sample Text</h2>
            </div>
        </div>

      </div>
        
      </section>

  
      
    );
}



export default Footer;