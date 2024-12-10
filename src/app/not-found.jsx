import DeployIcon from "@/components/icon/deploy";
import DevIcon from "../components/icon/devicon";
import Link from "next/link";

const Not_found =()=>{
    return(
        <>
        <div className='w-full h-full absolute px-5 lg:flex lg:flex-col lg:items-center lg:justify-center'>
            <div className="mt-20 lg:mt-5 flex items-center justify-center">
                <DevIcon className='text-red-900' width={150} height={150}/>
                <h1 className='text-9xl font-bold'>404</h1>
            </div>
            <p className='py-5 text-base text-center flex items-center'><DeployIcon className='text-red-900 mr-2' height={25} width={25}/> La página que buscabas no existe o se redirecciono.</p>
            <Link href='/'><i className="border-2 border-red-800 py-2 px-6 rounded-full hover:bg-red-800">Volver a Inicio </i></Link>
        </div>
        </>
    )
}

export default Not_found;