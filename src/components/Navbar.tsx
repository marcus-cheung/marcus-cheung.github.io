import React, {useRef} from 'react';
import { Link as ScrollLink, Element, animateScroll as scroll } from 'react-scroll';


function Social({url, image}) {
  return(<a className={'w-9 h-9 cursor-pointer bg-no-repeat hover:bg-contain hover:bg-center'} style={{backgroundImage: `url(assets/images/highlight.png)`}} href={url} target="_blank">
          <img src={image} className='w-9 h-9 min-w-9 min-h-9 object-cover top-0 left-0 select-none' draggable={false}/>
        </a>
    )
}



//ff8c00
function Navbar({curTheme, activateMonty}) {
  function ButtonStyle({route, element}) {
    return (<ScrollLink
            activeClass="active"
            to={route}
            spy={true}
            smooth={'easeInOutQuart'}
            duration={100}>
              <div onClick={() => {window.location.href = route;}} className='relative cursor-pointer w-fit group flex text-xl'> 
                <div className={'absolute left-[-24px] w-6 h-6 flex items-center bg-no-repeat md:group-hover:bg-contain'}
                  style={{backgroundImage: `url(assets/images/highlight.png)`}}>
                </div>
                <div className='w-fit bg-no-repeat hover:bg-contain md:hover:bg-auto hover:bg-center md:hover:bg-right'
                  style={{backgroundImage: `url(assets/images/highlight.png)`}}>
                  {element}
                </div>
              </div>
              
            </ScrollLink>)
  }

  const montyRef = useRef<any>(null);

  const montyButton =
  <div ref={montyRef} onClick={() => {window.location.href = '#'; activateMonty(); montyRef.current.style.visibility = 'hidden';}} className='relative cursor-pointer w-fit group flex text-xl'> 
    <div className={'absolute left-[-24px] w-6 h-6 flex items-center bg-no-repeat md:group-hover:bg-contain'}
      style={{backgroundImage: `url(assets/images/highlight.png)`}}>
    </div>
    <div className='w-fit bg-no-repeat hover:bg-contain md:hover:bg-auto hover:bg-center md:hover:bg-right'
      style={{backgroundImage: `url(assets/images/highlight.png)`}}>
      Monty?
    </div>
  </div>

  return (
    <nav className={`h-0 collapse md:visible ml-20 z-10 md:sticky top-0 ${curTheme.colors.text} md:w-36 md:h-screen md:flex md:flex-col md:justify-between md:pt-16 md:pb-36 md:flex-shrink-0`}>
      <strong className='text-5xl'>MARCUS CHEUNG</strong>

      <div className={'flex justify-around md:flex-col md:gap-4 mb-2'}>
        <ButtonStyle route='#' element={<div>About</div>}></ButtonStyle>
        <ButtonStyle route='#work' element={<div>Work</div>}></ButtonStyle>
        <ButtonStyle route='#projects' element={<div>Projects</div>}></ButtonStyle>
        {montyButton}
      </div>

      
        
      <div className={'flex gap-4'}>
        <Social url='mailto: cheung.marcus@gmail.com' image={curTheme.assets.email}></Social>
        <Social url='https://www.linkedin.com/in/marcusjcheung/' image={curTheme.assets.linkedin}></Social>
        <Social url='https://github.com/marcus-cheung' image={curTheme.assets.github}></Social>
      </div>
       
    </nav>
  );
};

export default Navbar;
        