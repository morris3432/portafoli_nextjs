import DevIcon from "../components/icon/devicon";
import Link from "next/link";

const Not_found =()=>{
    return(
        <>
        <div className='w-full h-full absolute px-5 lg:flex lg:flex-col lg:items-center lg:justify-center'>
            <div className="mt-20 lg:mt-5 flex items-center justify-center">
                <DevIcon width={125} height={125}/>
                <h1 className='text-9xl font-bold'>404</h1>
            </div>
            <p className='py-5 text-base text-center'>No se encontro la página que buscabas o se redirecciono.</p>
            <Link href='/'><i className="border-2 border-red-800 py-2 px-6 rounded-full hover:bg-red-800">Volver a Inicio </i></Link>
        </div>
        </>
    )
}

export default Not_found;