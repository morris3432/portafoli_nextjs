import Projects from "@/components/my-uis/item";

export default function Proyectos(){
    return(
        <>
            <div className="mx-auto mt-16 p-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
                <Projects img='crud' title='Agenda' info='Agenda de contactos hecha con python bajo 
                la libreria flet y SQLite para el almacenado de la informacion que el usuario ingrese.' github='https://github.com/morris3432/Agenda'/>
            </div>
        </>
    )
}