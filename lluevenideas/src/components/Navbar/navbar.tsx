'use client'
import { useState, useEffect, useCallback } from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import logoBlack from "../../../public/logoSmallBlack.svg";
import logoWhite from "../../../public/logoSmallWhite.svg";
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false); 

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = useCallback(() => {
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
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav
      className={`fixed top-0 z-50 left-0 w-full flex justify-between items-center py-4 px-6 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg text-black' : 'bg-transparent text-white'
      } ${showNavbar ? '' : '-translate-y-full'}`}
    >
      <Link className="flex items-center" href={'#home'}>
        {isScrolled 
          ? <Image src={logoBlack} alt={'Logo de llueven ideas, es la letra "L" más la letra "i"'} priority/>
          : <Image src={logoWhite} alt={'Logo de llueven ideas, es la letra "L" más la letra "i"'} priority/>
        }
      </Link>

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
        <div className="md:hidden flex flex-col absolute top-16 right-4 bg-white text-black p-4 rounded-lg shadow-lg">
          <Link onClick={handleToggle} href="#service" className="mb-4 hover:text-gray-400">Servicios</Link>
          <Link onClick={handleToggle} href="#about" className="mb-4 hover:text-gray-400">Nosotros</Link>
          <Link onClick={handleToggle} href="#proyect" className="mb-4 hover:text-gray-400">Proyectos</Link>
          <Link onClick={handleToggle} href="#contact" className="mb-4 hover:text-gray-400">Contacto</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
