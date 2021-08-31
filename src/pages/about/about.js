import {useEffect} from 'react'
import { Link } from 'react-router-dom';

import Aos from 'aos';
import 'aos/dist/aos.css';

import './about.scss';
import '../../global/global.scss'




import PromLogo from '../../assets/logo1.png';
import PromLogo2 from '../../assets/logo3.png';

import Typing from '../../global/components/typing.js';
import Line from '../../global/components/line.js';
import NavBar from '../../global/components/navbar';
import Footer from '../../global/components/footer';




// import Name from '../home/home.js'




function AboutPage(){
    return(
        <>
            <NavBar selected = {1} />
            <OurMission />
            <Line color='#FF9400' height={3} width={'auto'} className='sepLines'/>            
            <WhoWeAre />
            <Line color='#FF9400' height={3} width={'auto'} className='sepLines'/>            
            <MeetTeam />
            <Footer />       
        </>
    );
}


function Card({ heading, subheading, description}){
    useEffect(() => {
      Aos.init({duration:2000, once:true});
      
    },[]);
    return (
        <a data-aos="fade-up" className='card' href=''>
          <h3 className='f1 card'>{heading}</h3>
          <h4 className='f2 card'>{subheading}</h4>
          <p className='f2 card'>{description}</p>
        </a>
  
    );
  }

function OurMission(){
    return(
    
        <section>
            <p className = 'f2 mission'>{MissionText}</p>
        </section>
    );
}


function WhoWeAre(){
    return(
    
        <section className = 'who' width= '100%'>
            <div className = 'row'>
                <h1 className = 'f1 vertical-text who'> Who Are We?</h1>
                <p className = 'f2 who'> SAMPLETEXT SAMPLETEXT SAMPLETEXT SAMPLETEXT SAMPLETEXTSAMPLETEXT SAMPLETEXTSAMPLETEXTSAMPLETEXTSAMPLETEXTSAMPLETEXTSAMPLETEXT</p>
            </div>
        </section>
    );
}

function MeetTeam(){
    return(
    <section className = 'team'>
        <h1 className = 'f1 team vertical-text'> Who Are We?</h1>
            <section className='TeamTiles row center-main'>
                <Card 
                    heading='Henry'
                    subheading='chinese guy'
                    description='lorem ipsum'
                />
                <Card 
                    heading='Arjun'
                    subheading='windia'
                    description='lorem ipsum'
                />
                <Card 
                    heading='Robert'
                    subheading='chinese guy 2'
                    description='lorem ipsum'
                />
                <Card 
                    heading='Adam'
                    subheading='chinese guy 3'
                    description='lorem ipsum'
                />
            </section>
        </section>
        );
}


const MissionText = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec suscipit risus. Fusce eros nisl, accumsan a imperdiet ut, porttitor eu metus. Nunc tempor massa id eros consectetur ullamcorper. Nullam magna libero, dapibus eget justo quis, vulputate suscipit risus. Integer et sem sollicitudin, dapibus risus sit amet, viverra ex. Cras risus orci, lobortis id aliquet sed, finibus aliquam arcu. In congue nunc hendrerit elit blandit convallis. Mauris dolor erat, commodo nec luctus id, pretium id erat. In blandit finibus nisi. In ut justo gravida arcu faucibus feugiat. Nulla eget velit a ipsum fringilla scelerisque. Pellentesque sed ex elementum, rhoncus libero ut, lacinia metus. Proin sem ligula, convallis vitae gravida non, luctus eu purus. Proin a ex lacus. Donec dapibus, neque vitae vulputate feugiat, diam eros imperdiet dui, sit amet sollicitudin tortor dolor vel enim. Aliquam laoreet vehicula felis id vestibulum. Suspendisse laoreet, ante varius elementum viverra, ligula libero bibendum dui, et laoreet tortor tellus eu quam. Nam in quam odio. Phasellus sagittis ligula tristique nibh semper facilisis. Donec sed dui nulla. In hendrerit mollis euismod. Pellentesque ultrices nunc et aliquam semper. Aliquam sodales laoreet vestibulum. In tincidunt vehicula augue, at euismod felis venenatis sit amet. Phasellus ac rutrum leo. Donec in lorem semper, posuere elit eget, porttitor nulla. Vestibulum blandit ultrices leo, placerat fermentum risus feugiat sit amet. Donec fringilla cursus neque et facilisis. Nunc tempor, massa ut porta dapibus, risus mauris feugiat lorem, at consequat eros nunc vitae lacus. Ut pulvinar odio quis sem fermentum, et congue arcu hendrerit. Morbi sodales ornare nisi quis vulputate. Duis sed nibh maximus, auctor felis nec, dignissim ex. Integer ex mauris, efficitur eget sollicitudin et, bibendum quis purus. Pellentesque aliquet eros vitae sem imperdiet ultricies. Curabitur placerat augue eu dolor condimentum consectetur. Ut ullamcorper tempus lorem eget faucibus. Etiam malesuada ultrices congue. In hac habitasse platea dictumst. Vivamus ut arcu porttitor, sollicitudin nisl id, ultrices ante. Sed diam metus, egestas a lectus eu, auctor fermentum mi. Fusce imperdiet, arcu a posuere malesuada, nisl ex posuere nunc, a mollis neque nunc ac leo. Ut aliquet sapien leo, ut blandit mi mollis et. Fusce eget orci eget tortor iaculis eleifend nec eu ligula. Aenean nec ullamcorper tortor, in tempor leo. In condimentum sit amet felis ac vestibulum. Phasellus vitae augue ut felis aliquet convallis vitae ut risus. Praesent pulvinar dapibus ipsum, vitae pellentesque ante egestas eu. Cras sit amet consequat risus, id efficitur ligula. Suspendisse id justo tortor. Aliquam vitae justo nec nisi fermentum maximus eu non lectus. Curabitur id efficitur ex. Proin eget nunc mattis, mattis arcu in, imperdiet justo. Morbi sed sem sit amet velit vestibulum euismod eget ac diam. Maecenas velit lorem, tempus eleifend tempus ac, convallis eget est. Ut dui diam, mattis sed nunc nec, scelerisque tincidunt nunc. Aenean eget sapien at ex interdum eleifend vitae et magna. Proin molestie justo elit, a eleifend felis venenatis et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'



export default AboutPage;