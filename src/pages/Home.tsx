
function Social({url, image}) {
  return(<div className={'w-12 h-12 cursor-pointer bg-no-repeat hover:bg-contain hover:bg-center'} style={{backgroundImage: `url(assets/images/highlight.png)`}} onClick={() => {window.open(url, '_blank')!.focus()}}>
          <img src={image} className='w-12 h-12 min-w-12 min-h-12 object-cover top-0 left-0 select-none' draggable={false}/>
        </div>
    )
}

function Home({curTheme}) {
  return (
    <div className='flex flex-col gap-7 h-full justify-center items-center pb-40'>
        <p className='text-center text-8xl'><strong>MARCUS CHEUNG</strong></p>
        <div className='flex justify-between w-80'>
            <Social url='mailto: cheung.marcus@gmail.com' image={curTheme.assets.email}></Social>
            <Social url='https://www.linkedin.com/in/marcusjcheung/' image={curTheme.assets.linkedin}></Social>
            <Social url='https://github.com/marcus-cheung' image={curTheme.assets.github}></Social>
        </div>
    </div>
    );
};
export default Home;