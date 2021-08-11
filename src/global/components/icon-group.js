import '../global.scss';
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function IconGroup({column, className}){
    return(
        <div className={`${column ? 'column' : 'row'} ${className}`}>
            <FaInstagram className='icon'/>
            <FaTwitter className='icon'/>
            <FaGithub className='icon'/>
            <FaLinkedin className='icon'/>
        </div>
    );
}

export default IconGroup;