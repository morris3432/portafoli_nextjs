import Link from "next/link";

export default function Sidebar(){
    return(
    <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold text-cyan-900">¿Por qué contratarme?</h1>
        <p className=" p-2 text-lg text-center">
        Estoy interesado en la creación de aplicaciones de escritorio y móvil, el desarrollo de aplicaciones y páginas web, el análisis de datos y el machine learning.
        </p>
        <div className=" w-full flex flex-col justify-center items-center h-80 gap-8">
            <Link href='/resumen'><h1 className="border-2 shadow-xl border-cyan-900 px-6 py-4 rounded-full text-lg font-semibold hover:bg-cyan-900">Experiencia</h1></Link>
            <Link href='/resumen/estudios'><h1 className="border-2 shadow-xl border-cyan-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-900">Estudios</h1></Link>
            <Link href='/resumen/habilidades'><h1 className="border-2 shadow-xl border-cyan-900 px-6 py-4 rounded-full text-lg font-semibold hover:bg-cyan-900">Habilidades</h1></Link>
        </div>
    </div>)
}