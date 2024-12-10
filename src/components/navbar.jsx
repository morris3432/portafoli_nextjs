'use client';

import DevIcon from "./icon/devicon";
import Link from "next/link";
import { ThemeSwitcher } from "./button/switch";
import MenuL from "./menu";

const NavBar = () => {
  //logica 

  return (
    <nav className="flex items-center justify-between flex-wrap px-8 py-4 bg-black xl:bg-transparent">
      <Link href='/'>
        <div className="flex items-center flex-shrink-0 mr-6">
          <DevIcon  width={50} height={50} className='mr-2 fill-cyan-900'/>
          <h1 className="text-2xl font-extrabold"><span className="text-cyan-500">Cris</span><span className="text-cyan-700">tian</span><span className="text-cyan-900">.</span></h1>
        </div>
      </Link>
      
      <div className="block lg:hidden">
        <MenuL />
      </div>

      <div className="hidden lg:block">
        <div className="flex items-center gap-10">
          <Link href='/'>
            <h1 className="text-xl font-extrabold text-cyan-900 border-b-2 border-transparent hover:border-b-2 hover:border-cyan-900 ">Inicio</h1>
          </Link>
          <Link href='/servicio'>
            <h1 className="text-xl font-extrabold text-cyan-900 border-b-2 border-transparent hover:border-b-2 hover:border-cyan-900">Servicio</h1>
          </Link>
          <Link href='/resumen'>
            <h1 className="text-xl font-extrabold text-cyan-900 border-b-2 border-transparent hover:border-b-2 hover:border-cyan-900">Resumen</h1>
          </Link>
          <Link href='/proyectos'>
            <h1 className="text-xl font-extrabold text-cyan-900 border-b-2 border-transparent hover:border-b-2 hover:border-cyan-900">Proyectos</h1>
          </Link> 
          <Link href='/contacto'>
            <h1 className="text-xl font-extrabold text-cyan-900 border-b-2 border-transparent hover:border-b-2 hover:border-cyan-900">Contacto</h1>
          </Link>
          <ThemeSwitcher /> 
        </div>
      </div>

    </nav>
  );
}

export default NavBar;
