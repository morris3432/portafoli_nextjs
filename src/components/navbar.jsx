'use client';

import DevIcon from "./icon/devicon";
import Link from "next/link";
import { ThemeSwitcher } from "./button/switch";
import MenuL from "./menu";

const NavBar = () => {
  //logica 

  return (
    <nav className="flex items-center justify-between flex-wrap px-8 py-4 bg-black xl:bg-transparent">
      <div className="flex items-center flex-shrink-0 mr-6">
        <DevIcon  width={50} height={50} className='mr-2 fill-red-800'/>
        <h1 className="text-2xl font-extrabold"><span className="text-red-500">Cris</span><span className="text-red-700">tian</span><span className="text-red-900">.</span></h1>
      </div>
      
      <div className="block lg:hidden">
        <MenuL />
      </div>

      <div className="hidden lg:block">
        <div className="flex items-center gap-10">
          <Link href='/'>
            <h1 className="text-xl font-extrabold text-red-800 border-b-2 border-transparent hover:border-b-2 hover:border-red-800 ">Inicio</h1>
          </Link>
          <Link href='/servicio'>
            <h1 className="text-xl font-extrabold text-red-800 border-b-2 border-transparent hover:border-b-2 hover:border-red-800">Servicio</h1>
          </Link>
          <Link href='/resumen'>
            <h1 className="text-xl font-extrabold text-red-800 border-b-2 border-transparent hover:border-b-2 hover:border-red-800">Resumen</h1>
          </Link>
          {/*<Link href='/proyectos'>
            <h1 className="text-xl font-extrabold text-red-800 border-b-2 border-transparent hover:border-b-2 hover:border-red-800">Proyectos</h1>
          </Link> */}
          <Link href='/contacto'>
            <h1 className="text-xl font-extrabold text-red-800 border-b-2 border-transparent hover:border-b-2 hover:border-red-800">Contacto</h1>
          </Link>
          <ThemeSwitcher /> 
        </div>
      </div>

    </nav>
  );
}

export default NavBar;
