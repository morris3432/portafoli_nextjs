import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger ,SheetFooter } from "@/components/ui/sheet"
import Link from "next/link"
import Menu from "./icon/menu"
import { ThemeSwitcher } from "./button/switch"
import { BookOpen, Home, ServerIcon,ContactIcon } from "lucide-react"

export default function MenuL(){
return (
    <Sheet>
        <SheetTrigger asChild className="xl:hidden block cursor-pointer text-red-800"><Menu height={35} width={35}/></SheetTrigger>
        <SheetContent className='bg-black mt-16'>
        <SheetHeader>
            <SheetTitle className='text-red-800 text-3xl' >Menú</SheetTitle>
            <SheetDescription>
            Bienvenido 
            </SheetDescription>
        </SheetHeader>
        <ul className="mt-5 ">
            <Link href='/'><h1 className="flex text-2xl text-white font-bold hover:bg-red-800 hover:text-white py-3"><Home className="mr-2"/>Inicio</h1></Link>
            <Link href='/servicio'><h1 className=" flex text-2xl text-white font-bold hover:bg-red-800 hover:text-white py-3"><ServerIcon className="mr-2"/>Servicios</h1></Link>
            <Link href='/resumen'><h1 className="flex text-2xl text-white font-bold hover:bg-red-800 hover:text-white py-3"><BookOpen className="mr-2"/>Resumen</h1></Link>
            <Link href='/contacto'><h1 className="flex text-2xl text-white font-bold hover:bg-red-800 hover:text-white py-3"><ContactIcon className="mr-2"/>Contacto</h1></Link>
            
        </ul>
        <SheetFooter className='mt-60'>
        <div className="flex items-start justify-start gap-5 text-white"><ThemeSwitcher/> <h1 className="text-xl font-bold">Tema</h1></div>
        </SheetFooter>
        </SheetContent>
    </Sheet>
    )
}