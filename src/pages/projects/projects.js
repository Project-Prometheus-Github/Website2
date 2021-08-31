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

function ProjectsPage(){
    return (
        <Event />
    );
}

function Event({ right, heading, description, src }){
    // by default text is on the left, but if the right prop is passed, then the text and image will be switched.'

    const TextComponent = (heading, description,) => {
        return (
            <div>
                <h1 className='f2'>{heading}</h1>
                <Line height={2} width='40%'/>
                <p>{description}</p>
            </div>
        );
    }

    return (
        <section>
            <div>
                {right ? null : <TextComponent heading={heading} description={description}/>}
                <img src={PromLogo2}/>
                {right ? <TextComponent heading={heading} description={description}/> : null}
            </div>

        </section>
    );
}