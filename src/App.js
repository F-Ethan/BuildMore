import React from 'react';
import logo from './imgs/stockConstruction (6).jpg';
import './App.css';
import Landing from './comp/Landing'
function App() {
  return (
    <div className='justify-center rounded p-3'>
      <div className="flex shadow-lg overflow-hidden">
        <div className='flex-1 rounded overflow-hidden'>
          <div className='px-6 py-4'>

            <div className='font-semibold text-xl mb-2  flex justify-center'>
              About Me
            </div>
            <p className='text-gray-700 text-base'>
              My name is Mitch McCuen, I am a certified Full Stack software
              developer specializing in JavaScript. I Graduated from Bethel
              School of Technology in 2020. I am a software developer with a
              drive for continual learning and growth. I carry excellence,
              creativity and passion for the job. I enjoy a challenge and often
              thrive when I am in over my head. I am a quick learner and a hard
              worker and will give my all to the task at hand. I love to help
              people and make a positive impact on the world around me. I am a
              family man, an avid outdoorsman, video game enthusiast, and a
              fantastic cook.
            </p>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <span className='inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #JrDev
            </span>
            <span className='inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #Full Stack
            </span>
            <span className='inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #Boston
            </span>
            <a
              href='https://www.facebook.com/mitch.mccuen'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className=' inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"'>
                #Facebook
              </span>
            </a>
            <a
              href='https://www.instagram.com/mitchmccuen/?hl=en'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"'>
                #Instagram
              </span>
            </a>
            <a
              href='https://www.linkedin.com/in/mitch-mccuen-a7a8701a0/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"'>
                #LinkedIn
              </span>
            </a>
          </div>
        </div>
        <div className="flex-1 overflow-hidden relative h-auto">
          <img
            src={logo}
            alt='pictureOfMe'
            className='rounded overflow-hidden shadow-lg'
          />
          <Landing />
          {/* <div className="absolute text-lg -mt-16 text-black px-4">Welocme to build more</div> */}
        </div>
      </div>
      {/* end of container div */}
    </div>


  );
}

export default App;
