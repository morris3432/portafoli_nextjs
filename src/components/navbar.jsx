'use client';

import React, { useState } from "react";
import DevIcon from "./icon/devicon";
import Link from "next/link";
import Menu from "./icon/menu";
import { ThemeSwitcher } from "./button/switch";

const NavBar = () => {
  const [menuOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center py-3 px-4 md:px-32 drop-shadow-sm"> 
      <Link href="/">
      <div className="flex justify-start items-center hover:scale-105 transition-all">
        <DevIcon width={50} height={40}/>
        <h1 className='mx-3 font-extrabold text-2xl'>
          <samp className="text-red-300">Cris</samp>
          <samp className="text-red-800">tian</samp>
          <samp className="text-red-900">.</samp>
        </h1>
        </div>
      </Link>
      <ul className="hidden xl:flex items-center gap-12 font-semibold text-base text-red-800">
      <Link href='/'>
        <p className="p-3 hover:bg-red-800 hover:text-white rounded-md transition-all cursor-pointer">
          Inicio
        </p></Link>
      <Link href='/servicio'>
        <p className="p-3 hover:bg-red-800 hover:text-white rounded-md transition-all cursor-pointer">
          Servicio
        </p>
      </Link>
        <Link href='/resumen'>
          <li className="p-3 hover:bg-red-800 hover:text-white rounded-md transition-all cursor-pointer">
            Resumen
          </li>
        </Link>
        <Link href='/contacto'><li className="p-3 hover:bg-red-800 hover:text-white rounded-md transition-all cursor-pointer">
          Contacto
        </li></Link>
        <ThemeSwitcher/>
      </ul>
      
      <i onClick={() => setIsOpen(!menuOpen)} className="xl:hidden block cursor-pointer text-red-800">
        <Menu height={35} width={35} />
      </i>
      <div className={`p-2 absolute xl:hidden top-24 right-0 w-3/12 border-2 flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${menuOpen ? "opacity-100" : "opacity-0"}`}
          style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}>
        <ul>
        <li className="text-red-800 list-none w-full text-center p-4 hover:bg-red-800 hover:text-white transition-all cursor-pointer">
          <Link href='/'>Inicio</Link>
        </li>
        <li className="text-red-800 list-none w-full text-center p-4 hover:bg-red-800 hover:text-white transition-all cursor-pointer">
          <Link href='/servicio'>Servicio</Link>
        </li>
        <li className="text-red-800 list-none w-full text-center p-4 hover:bg-red-800 hover:text-white transition-all cursor-pointer">
          <Link href='/resumen'>Resumen</Link>
        </li>
        <li className="text-red-800 list-none w-full text-center p-4 hover:bg-red-800 hover:text-white transition-all cursor-pointer">
          <Link href='/contacto'>Contacto</Link>
        </li>
        <ThemeSwitcher/>
        </ul>

      </div>
    </div>
  );
}

export default NavBar;
