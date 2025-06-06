import React from 'react'
import send_icon from '../assets/send-icon.png'
import right_arrow_blod from '../assets/right-arrow-bold.png'
import right_arrow_blod_dark from '../assets/right-arrow-bold-dark.png'

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
    <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
    <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
    <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end and back-end development.</p>

    <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        <div className="aspect-square bg-[url('./assets/work-1.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                <a 
  href="https://github.com/sadyasinthi1/netflix-1" 
  className="text-xl font-semibold text-gray-900 hover:underline dark:text-white"
>
  Sflix-Full stack Netflix clone 
</a>
                    <a class="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm my-1">Technologies used -React JS, Firebase and the movie database API</a>
                                    </div>
                
                   
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                    <img src={send_icon} alt="" className="w-5"/>
                </div>
            </div>
        </div>
        <div className="aspect-square bg-[url('./assets/work-2.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                <a 
  href="https://github.com/sadyasinthi1/deepseek-setup1" 
  className="text-xl font-semibold text-gray-900 hover:underline dark:text-white"
>
  Sadyaai-Full stack Deepseek clone 
</a>
                    <a class="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm my-1">Technologies used -Node js, MongoDb, Clerk webhooks, Vercel & Deepseek API</a>
                                    </div>
                
            </div>
        </div>
        <div className="aspect-square bg-[url('./assets/work-3.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
                <a 
  href="https://github.com/sadyasinthi1/video-calling-software" 
  className="text-xl font-semibold text-gray-900 hover:underline dark:text-white"
>
  Rendezvous-Full stack Zoom clone 
</a>
                    <a class="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm my-1">Technologies used -Bcrypt, MongoDb, Express Js, Socket Io, Material UI,Axios, React js, Css</a>
                                    </div>
                
            </div>
        </div>
        <div className="aspect-square bg-[url('./assets/work-4.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
                <a 
  href="https://github.com/sadyasinthi1/s-imagify" 
  className="text-xl font-semibold text-gray-900 hover:underline dark:text-white"
>
  S-imagify-Full stack Text2Image Generator 
</a>
                    <a class="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm my-1">Technologies used -Node js, MongoDb, Express,React & Vercel</a>
                                    </div>
            </div>
        </div>
    </div>
    <a href="#" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500
    dark:text-white dark:border-white dark:hover:bg-darkHover">Show more
        <img src={right_arrow_blod} alt="" className="w-4 dark:hidden"/>
        <img src={right_arrow_blod_dark} alt="" className="w-4 hidden dark:block"/>
    </a>

</div>
  )
}

export default Work
