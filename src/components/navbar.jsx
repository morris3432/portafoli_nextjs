'use client';

import React, { useState } from "react";
import DevIcon from "./icon/devicon";
import Link from "next/link";
import Menu from "./icon/menu";
import { ThemeSwitcher } from "./button/switch";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
  ,SheetFooter
} from "@/components/ui/sheet"
import { Button } from './ui/button'

const NavBar = () => {
  const [menuOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-3 px-4 md:px-32 drop-shadow-sm"> 
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

      <Sheet>
        <SheetTrigger asChild className="xl:hidden block cursor-pointer"><Menu height={35} width={35}/></SheetTrigger>
        <SheetContent className='bg-black'>
          <SheetHeader>
            <SheetTitle className='text-red-800 text-3xl' >Menú</SheetTitle>
            <SheetDescription>
              Bienvenido 
            </SheetDescription>
          </SheetHeader>
          <ul className="mt-5 ">
            <Link href='/'><h1 className="text-2xl text-white font-bold hover:bg-red-800 hover:text-white py-3 px-2">Inicio</h1></Link>
            <Link href='/servicio'><h1 className="text-2xl text-white font-bold hover:bg-red-800 hover:text-white py-3 px-2">Servicio</h1></Link>
            <Link href='/resumen'><h1 className="text-2xl text-white font-bold hover:bg-red-800 hover:text-white py-3 px-2">Resumen</h1></Link>
            <Link href='/contacto'><h1 className="text-2xl text-white font-bold hover:bg-red-800 hover:text-white py-3 px-2">Contacto</h1></Link>
            
          </ul>
          <SheetFooter className='mt-80'>
          <div className="flex items-start justify-start gap-5 text-white"><ThemeSwitcher/> <h1 className="text-xl font-bold">Tema</h1></div>
          </SheetFooter>
        </SheetContent>
      </Sheet>

    </nav>
  );
}

export default NavBar;
