import Sidebar from "@/components/sidebar";

const ResumenLayout=({children})=>{
    return(
        <><div className="mt-20 flex items-center justify-start">
            <div className="w-6/12">
                <Sidebar />
            </div>
            <div className="w-6/12">
            <div className="h-40 justify-center items-center absolute flex flex-col">
            <h1 className="text-center text-red-800 text-4xl font-extrabold">Experiencia</h1>
            <p className="p-2">Aquí podrás encontrar una breve descripción de mi experiencia profesional y el trabajo que he realizado en diferentes proyectos.</p>
            </div >
            <div className=" p-4 mt-40 h-96 ">
                {children}
            </div>
            </div>
        </div>
        </>
    )
}

export default ResumenLayout;