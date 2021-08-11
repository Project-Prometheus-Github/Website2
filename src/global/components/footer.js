import '../global.scss';
// import PromLogo from '../../assets/logo1.png';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { FontAwesome } from "react-icons/fa";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Line from './line.js';
import IconGroup from './icon-group.js';
import Logo from '../../assets/logo1.png';



function Footer(){
  
  const links = [
    {
      text: 'Our Mission',
      link: '/about',
    },
    {
      text: 'About Us',
      link: '#',
    },
    {
      text: 'Initiatives',
      link: '#',
    },
    {
      text: 'Blog',
      link: '#',
    },
    {
      text: 'Team',
      link: '#',
    },
  ]

  const contact = [
    {
      text: 'projectprometheuslead@gmail.com',
      link: 'mailto:projectprometheuslead@gmail.com',
    },
  ];


  return(
    <section className='footer'>

        <div className='row left-wrapper'>
          <div className='footer-text-grid'>
            <img src={Logo}/>
            <h6 className='f1'>PROJECT</h6>
            <h5 className='f1'>Prometheus</h5>
            <p className='f2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        <Line width={2} height='60%' color='white' className='footer-line'/>

        <div className='row right-wrapper'>
          <FooterList links={links} />

          <IconGroup column className='footer'/>
        </div>
          
        
    </section>
  );
}

function FooterList({ links }){
  return (
    <div className='footer-list column'>
      {links.map( obj => (
        <a className='f2' href={obj.link}>{obj.text}</a>
      ))}
    </div>
  );
}



export default Footer;