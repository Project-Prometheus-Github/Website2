
import { Link } from 'react-router-dom';


import '../../global/global.scss'

import './about.scss';


import NavBar from '../../global/components/navbar';

function AboutPage(){
    return(
        <>
        <section className = 'bingusberry'>
            <NavBar selected = {1} />
            <OurMission />
        </section>
        </>
    );
}




function OurMission(){
    return(
    
        <Link to='/'>Back to Home</Link>
    );
}

export default AboutPage;