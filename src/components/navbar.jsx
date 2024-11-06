'use client';

import DevIcon from "./icon/devicon";
import Link from "next/link";
import { ThemeSwitcher } from "./button/switch";
import MenuL from "./menu";

const NavBar = () => {

  return (
    <nav className="bg-black xl:bg-transparent flex justify-between items-center py-3 px-4 md:px-32 drop-shadow-sm"> 
      <Link href="/">
      <div className="flex justify-start items-center hover:scale-105 transition-all">
        <DevIcon className='text-red-800 ' width={50} height={40}/>
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
      <MenuL />
    </nav>
  );
}

export default NavBar;
