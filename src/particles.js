import Particles from 'react-particles-js';
import "./global/global.scss";

// documentation https://www.npmjs.com/package/react-particles-js
// working example code https://codesandbox.io/s/4k5z9xx0w?file=/src/ParticleComponent.js:95-224

function ParticlesContainer({ children }) {
    return (
        <>
            <div className='background'>
                
                <Particles
                params={{
                    particles: {
                    number: {
                        value: 60,
                        density: {
                        enable: true,
                        value_area: 1600
                        }
                    },
                    color: {
                        value: "#FF9400"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                        width: 2,
                        color: "#FF9400"
                        },
                        polygon: {
                        nb_sides: 4
                        },
                        image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                        }
                    },
                    opacity: {
                        value: 0.4008530152163807,
                        random: false,
                        anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                        }
                    },
                    size: {
                        value: 1.5,
                        random: true,
                        anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 200,
                        color: "#FF9400",
                        opacity: 0.4,
                        width: 0.6
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                        }
                    }
                    },
                    interactivity: {
                    detect_on: "window",
                    events: {
                        onhover: {
                        enable: true,
                        mode: "repulse"
                        },
                        onclick: {
                        enable: false,
                        mode: "bubble"
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                        },
                        bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                        },
                        repulse: {
                        distance: 100,
                        duration: 0.4
                        },
                        push: {
                        particles_nb: 4
                        },
                        remove: {
                        particles_nb: 2
                        }
                    }
                    },
                    retina_detect: true
                }} />
            </div>
            <div className='background'>
                {children}
            </div>
        </>
    );

}

export default ParticlesContainer;