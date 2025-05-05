import React from 'react'
import user_image from '../assets/user-image.png'
import circular_text from '../assets/circular-text.png'
import dev_icon from '../assets/dev-icon.png'
import code_icon from '../assets/code-icon.png'
import code_icon_dark from '../assets/code-icon-dark.png'
import edu_icon from '../assets/edu-icon.png'
import edu_icon_dark from '../assets/edu-icon-dark.png'
import project_icon from '../assets/project-icon.png'
import project_icon_dark from '../assets/project-icon-dark.png'
import vscode from '../assets/vscode.png'
import firebase from '../assets/firebase.png'
import figma from '../assets/figma.png'
import git from '../assets/git.png'
import mongodb from '../assets/mongodb.png'

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
    <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
    <h2 className="text-center text-5xl font-Ovo">About me</h2>

    <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="max-w-max mx-auto relative">
            <img src={user_image} alt="" className="w-64 sm:w-80 rounded-3xl max-w-none"/>

            <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
                <img src={circular_text} alt="" className="w-full animate-spin_slow"/>
                <img src={dev_icon} alt="" className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
            </div>
        </div>
        <div className="flex-1">
            <p className="mb-10 max-w-2xl font-Ovo">I am a fast track IT professional. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth. In my free time I love to post videos on my channel 'Coding with Sadya'. I'm a passionate believer in continuous learning and skill development in technology. This commitment led me to launch my YouTube channel 'Coding with Sadya,' where I share knowledge about cool projects that can be built even by kids! Follow me to learn about many cool projects in Youtube.</p>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black
                dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50
                ">
                    <img src={code_icon} alt="" className="w-7 mt-3 dark:hidden"/>
                    <img src={code_icon_dark} alt="" className="w-7 mt-3 hidden dark:block"/>

                    <h3 className="my-4 font-semibold text-gray-700 dark:text-white">Tools</h3>
                    <p className="text-gray-600 text-sm dark:text-white/80">HTML, CSS, JavaScript, React Js, Next Js, Python, Java, Ms Word, Excel, Powerpoint,Tableau, MS Azure </p>
                </li>
                <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">

                    <img src={edu_icon} alt="" className="w-7 mt-3 dark:hidden"/>
                    <img src={edu_icon_dark} alt="" className="w-7 mt-3 hidden dark:block"/>

                    <h3 className="my-4 font-semibold text-gray-700 dark:text-white">Education</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm dark:text-white/80">
      <li>Post Graduate Diploma in Software Engineering</li>
      <li>MBA in Marketing</li>
      <li>B.Tech in Electronics and Telecom. Engineering</li>
      <li>IELTS-8</li>
      <li>French Certification-CLB 6</li>
    </ul>
                </li>
                <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">

                    <img src={project_icon} alt="" className="w-7 mt-3 dark:hidden"/>
                    <img src={project_icon_dark} alt="" className="w-7 mt-3 hidden dark:block"/>


                    <h3 className="my-4 font-semibold text-gray-700 dark:text-white">Projects</h3>
                    <a href="https://www.youtube.com/@SadyaSinthi">
  <p className="text-gray-600 text-sm dark:text-white/80">
    View my projects on my YouTube channel
  </p>
</a>

<a 
  href="https://github.com/sadyasinthi1/deepseek-setup1" 
  className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm my-1"
>
  Sadyaai-Chatbot
</a>
<a 
  href="https://github.com/sadyasinthi1/video-calling-software" 
  className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm my-1"
>
  Rendezvous-Zoomclone
</a>
<a 
  href="https://github.com/sadyasinthi1/s-imagify" 
  className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm my-1"
>
  S-imagify-text2imagegenerator
</a>
<a 
  href="https://github.com/sadyasinthi1/netflix-1" 
  className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm my-1"
>
  Sflix-Netflixclone
</a>
                </li>
            </ul>
            <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools i use</h4>

            <ul className="flex items-center gap-3 sm:gap-5">
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                    <img src={vscode} alt="" className="w-5 sm:w-7"/>
                </li>
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                    <img src={firebase} alt="" className="w-5 sm:w-7"/>
                </li>
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                    <img src={mongodb} alt="" className="w-5 sm:w-7"/>
                </li>
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                    <img src={figma} alt="" className="w-5 sm:w-7"/>
                </li>
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                    <img src={git} alt="" className="w-5 sm:w-7"/>
                </li>
            </ul>
        </div>
    </div>
 </div>
  )
}

export default About
