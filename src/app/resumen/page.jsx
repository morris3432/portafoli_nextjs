const Resumen=()=>{
    return(
    <div className="w-full h-96 flex flex-col items-start justify-center">
        <div className="grid grid-cols-2 gap-5 w-full p-2">
            <div className="flex items-center hover:scale-110 transition-all border-2 border-red-800 rounded-r-3xl rounded-l-2xl">
                <div className="bg-red-800 w-2.5 h-full rounded-l-full"></div>
                <div className="h-full w-full bg-gradient-to-r to-transparent rounded-r-3xl p-2">
                    <h1 className="text-xl font-bold">Julio - Agosto 2024 </h1>
                    <p className="text-lg font-semibold">Tecnologico Industrial André Ampere</p>
                    <p className="text-base font-light">Desarrolle una aplicación que toma la asistencia por medio  de un codigo de barra</p>
                </div>

            </div>
            <div className="flex items-center hover:scale-110 transition-all border-2 border-red-800 rounded-r-3xl rounded-l-2xl">
                <div className="bg-red-800 w-3.5 h-full rounded-l-full"></div>
                <div className="h-full w-full bg-gradient-to-r to-transparent rounded-r-3xl p-2">
                    <h1 className="text-xl font-bold">Septiembre - Octubre 2024</h1>
                    <p className="text-lg font-semibold">VIA Aseso S.A</p>
                    <p className="text-base font-light">Hice mis practicas profesionales</p>
                </div>

            </div>
            

        </div>
    </div>
    )
}

export default Resumen