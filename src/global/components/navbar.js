import '../global.scss';
import PromLogo from '../../assets/logo1.png';
import { Link } from 'react-router-dom';

function NavBar ({selected}){ //'home', 'about', 'proj', 'arti', 'edit']


    
    // const mapper = [;
    

  //${selected == 1 ? 'selected' : null}`}  IF SELECTED IS 0, apply the selecte style, else null
  //   return (  
  //     <section className='row center-main'>
  //       <div className='navbar row f1'>
  //         <Link className={`navbar ${selected == 0 ? 'selected' : null}`}>Home</Link> 
  //         <Link className={`navbar ${selected == 1 ? 'selected' : null}`} to='/about'>About Us</Link>
  //         <Link className={`navbar ${selected == 2 ? 'selected' : null}`}>Projects</Link>
  //         <Link className={`navbar ${selected == 3 ? 'selected' : null}`}>Articles</Link>
  //         <Link className={`navbar ${selected == 0 ? 'selected' : null}`}>Home</Link> 

  //       </div>
  //     </section>

  // //
      
  //   );



    // const people = ['herny', 'arjun', 'robert', 'adam'];
    const peopleObj = [
      {
        name: 'henry',
        age: 16,
      },
      {
        name: 'ehtan',
        age: 17,
      }
    ]


    peopleObj.map((obj, index) => {
      console.log(obj + ' is at ' + (obj.age + index) + ' index.')
    })

    
    const text = ['Home','About Us','Projects', 'Articles', 'Editorials'];
    const links = ['','/about','','',''];


    return (
      <section className='row center-main'>
        <div className='navbar row f1'>
          {
            links.map((link, index) => (
              <Link className={`navbar ${(selected == index) ? 'selected' : null}`} to={link} key={index}>{text[index]}</Link> 
            ))
          }

        </div>
      </section>
    );
}


function ClickableImage({ source, size, style }){
  return(
    <a className='navbar'><img className='spin' src={source} width={size} height={size} style={style}/></a>
  );
}

export default NavBar;