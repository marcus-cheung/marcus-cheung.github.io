import React from 'react';

function Social({url, image}) {
  return(<div className={'w-12 h-12 cursor-pointer bg-no-repeat hover:bg-contain hover:bg-center'} style={{backgroundImage: `url(assets/images/highlight.png)`}} onClick={() => {window.open(url, '_blank')!.focus()}}>
          <img src={image} className='w-12 h-12 min-w-12 min-h-12 object-cover top-0 left-0 select-none' draggable={false}/>
        </div>
    )
}

function Home({curTheme}) {
  return (
    <div className='border-4 w-full h-96 flex flex-col py-24 gap-7 items-center pb-96'>
            <p className=''><strong>I'm a swe</strong></p>
    </div>
    );
};
export default Home;