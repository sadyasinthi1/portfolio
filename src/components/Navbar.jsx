import React, { useEffect, useRef } from 'react'
import logo from '../assets/logo.png'
import logo_dark from '../assets/logo_dark.png'
import header_bg_color from '../assets/header-bg-color.png'
import moon_icon from '../assets/moon_icon.png'
import sun_icon from '../assets/sun_icon.png'
import arrow_icon from '../assets/arrow-icon.png'
import arrow_icon_dark from '../assets/arrow-icon-dark.png'
import menu_black from '../assets/menu-black.png'
import menu_white from '../assets/menu-white.png'
import close_black from '../assets/close-black.png'
import close_white from '../assets/close-white.png'

const Navbar = () => {

  const sideMenuRef = useRef();
  const navRef = useRef();
  const navLinkRef = useRef();

  const openMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  }
  const closeMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  }
  const toggleTheme = ()=>{
    
    document.documentElement.classList.toggle('dark');

    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    }else{
        localStorage.theme = 'light';
    }
  }

  useEffect(()=>{
  
    window.addEventListener('scroll', ()=>{
        if(scrollY > 50){
          navRef.current.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
          navLinkRef.current.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', "dark:bg-transparent");
        }else{
          navRef.current.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
          navLinkRef.current.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', "dark:bg-transparent");
        }
    })
    
    // -------- light mode and dark mode -----------
    
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    
      
  },[])

  return (
    <>
    <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]
    dark:hidden">
        <img src={header_bg_color} alt="" className="w-full"/>
    </div>


    <nav ref={navRef} className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">

        <img src={logo} alt="Logo"
        className="w-28 cursor-pointer mr-14 dark:hidden" />

        <img src={logo_dark} alt="Logo"
        className="w-28 cursor-pointer mr-14 hidden dark:block" />

        <ul ref={navLinkRef} className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo
        dark:border dark:border-white/50 dark:bg-transparent ">
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">My Work</a></li>
            <li><a href="#contact">Contact me</a></li>
        </ul>

        <div className="flex items-center gap-4">
        <button onClick={toggleTheme}>
            <img src={moon_icon} alt="" className="w-6 dark:hidden" />
            <img src={sun_icon} alt="" className="w-6 hidden dark:block" />
        </button>

        <a href="mailto:sadyasinthi1@gmail.com" 
        className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50">
        Contact 
        <img src={arrow_icon} alt="" className="w-3 dark:hidden" />
        <img src={arrow_icon_dark} alt="" className="w-3 hidden dark:block" />
    </a>

        <button className="block md:hidden ml-3" onClick={openMenu}>
            <img src={menu_black} alt="" className="w-6 dark:hidden" />
            <img src={menu_white} alt="" className="w-6 hidden dark:block" />
        </button>

        </div>
{/* -- ----- mobile menu ------  -- */}
        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-darkHover dark:text-white">

            <div className="absolute right-6 top-6" onClick={closeMenu}>
                <img src={close_black} alt="" className="w-5 cursor-pointer dark:hidden" />

                <img src={close_white} alt="" className="w-5 cursor-pointer hidden dark:block" />
            </div>

            <li><a href="#top" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About me</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#work" onClick={closeMenu}>My Work</a></li>
            <li><a href="mailto:sadyasinthi1@gmail.com" onClick={closeMenu}>Contact me</a></li>
        </ul>
    
</nav>
    </>
  )
}

export default Navbar
