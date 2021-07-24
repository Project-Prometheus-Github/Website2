
import { Link } from 'react-router-dom';

import './about.scss';

import NavBar from '../../global/components/navbar';

function AboutPage(){
    return(
        <>
            <OurMission />
        </>
    );
}

function OurMission(){
    return(
        <Link to='/'>Back to Home</Link>
    );
}

export default AboutPage;