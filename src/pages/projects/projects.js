import { useEffect } from 'react'
import { Link } from 'react-router-dom';

import Aos from 'aos';
import 'aos/dist/aos.css';

import './projects.scss';
import '../../global/global.scss'




import PromLogo from '../../assets/logo1.png';
import PromLogo2 from '../../assets/logo3.png';

import Typing from '../../global/components/typing.js';
import Line from '../../global/components/line.js';
import NavBar from '../../global/components/navbar';
import Footer from '../../global/components/footer';

const pic = 'https://media.istockphoto.com/photos/always-brainstorming-picture-id1184334685?k=20&m=1184334685&s=612x612&w=0&h=K5ADo3hUhIXJnQUTymQM1J1aq5syuy3kL7yDbjs_tg4='

function ProjectsPage(){
    return (
        <>
                <Event right heading='title text' description='diwaidawijiejwandwjandwoadwaodawokddiwaidawijiejwandwjandwoadwaodawokddiwaidawijiejwandwjandwoadwaodawokddiwaidawijiejwandwjandwoadwaodawokddiwaidawijiejwandwjandwoadwaodawokddiwaidawijiejwandwjandwoadwaodawokddiwaidawijiejwandwjandwoadwaodawokd' src={pic}/>
        
        <Event heading='title text' description='diwaidawijiejwandwjandwoadwaodawokddiwaidawijiejwandwjandwoadwaodawokddiwaidawijiejwandwjandwoadwaodawokddiwaidawijiejwandwjandwoadwaodawokddiwaidawijiejwandwjandwoadwaodawokddiwaidawijiejwandwjandwoadwaodawokddiwaidawijiejwandwjandwoadwaodawokd' src={pic}/>
        </>

    );

}

function Event({ right, heading, description, src }){
    // by default text is on the right, but if the right prop is passed, then the text and image will be switched.'

    const TextComponent = ({heading, description,}) => {
        return (
            <div className='event-component-text'>
                <h1 className='f2'>{heading}</h1>
                <Line height={2} width='40%' color='black'/>
                <p>{description}</p>
            </div>
        );
    }



    return (
        <section className='event-component-parent'>
            <div className='event-component'>
                {right ? null : <img className='event-component-image' src={src}/> }
                <TextComponent heading={heading} description={description}/>
                {right ? <img className='event-component-image' src={src}/> : null }
            </div>

        </section>
    );
}

export default ProjectsPage;