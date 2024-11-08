'use client'
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import logoBlack from "../../../public/logoSmallBlack.svg"
import logoWhite from "../../../public/logoSmallWhite.svg"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false); 

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 50) {
      setIsScrolled(true); 
    } else {
      setIsScrolled(false); 
    }

    if (currentScrollY > 100 && currentScrollY > lastScrollY) {
      setShowNavbar(false); 
    } else if (currentScrollY < lastScrollY || currentScrollY < 100) {
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 z-50 left-0 w-full flex justify-between items-center py-4 px-6 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg text-black' : 'bg-transparent text-white'
      } ${showNavbar ? '' : '-translate-y-full'}`}
    >
      <div className="flex items-center">
        {
          isScrolled 
          ? <Image src={logoBlack} alt={'Logo de llueven ideas, es la letra "L" más la letra "i"'} />
          : <Image src={logoWhite} alt={'Logo de llueven ideas, es la letra "L" más la letra "i"'} />
          
        }
      </div>

      <div className="hidden md:flex items-end flex space-x-6">
        <a href="#services" className="hover:text-gray-500">Servicios</a>
        <a href="#about" className="hover:text-gray-500">Nosotros</a>
        <a href="#projects" className="hover:text-gray-500">Proyectos</a>
        <a href="#contact" className="hover:text-gray-500">Contacto</a>
      </div>

      <button className="md:hidden" onClick={handleToggle}>
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="md:hidden flex flex-col absolute top-16 right-4 bg-white text-gray-600 p-4 rounded-lg shadow-lg">
          <a href="#service" className="mb-4 hover:text-gray-400">Servicios</a>
          <a href="#about" className="mb-4 hover:text-gray-400">Nosotros</a>
          <a href="#proyect" className="mb-4 hover:text-gray-400">Proyectos</a>
          <a href="#contact" className="mb-4 hover:text-gray-400">Contacto</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
