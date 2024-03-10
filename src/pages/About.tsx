function About({curTheme}) {

  return (
    <div className='flex w-full h-full flex-col gap-7 justify-center items-center pb-40'>
        {/* <img src='assets/images/okja.png'></img> */}
        <p className='text-center text-2xl'><strong>I'm a software engineer</strong></p>
        <a className='text-4xl text-blue-500' href='assets/images/okja.png'>Click for Resume</a>
    </div>
    );
};
export default About;