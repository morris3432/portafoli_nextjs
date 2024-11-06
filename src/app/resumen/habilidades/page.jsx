import Image from "next/image";

export default function Habilidades(){
    return(
    <>
        <div className="h-40 flex flex-col justify-center items-center">
            <h1 className="text-center text-red-800 text-4xl font-extrabold">Mis Habilidades</h1>
            <p className="p-2">Aquí podrás encontrar una lista de mis habilidades con diferentes Tecnologias como desarrollador web y móvil.</p>
        </div>
        
        <div className="mt-14 lg:mt-0 w-full h-96 flex flex-col items-start justify-center">
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 w-full p-2">
                <div className="flex items-center hover:scale-110 transition-all rounded-r-3xl rounded-l-2xl">
                    <div className="bg-red-800 w-2 h-full rounded-l-full"></div>
                    <div className="h-full w-full bg-gray-400 bg-opacity-20 rounded-r-3xl p-2 flex items-center justify-center">
                        <Image src='/images/svg/javascript.svg' alt="js" height={0} width={120}/>
                    </div>
                </div>
                <div className="flex items-center hover:scale-110 transition-all rounded-r-3xl rounded-l-2xl">
                    <div className="bg-red-800 w-2 h-full rounded-l-full"></div>
                    <div className="h-full w-full bg-gray-400 bg-opacity-20 rounded-r-3xl p-2 flex items-center justify-center">
                        <Image src='/images/svg/python.svg' alt="py" height={0} width={120}/>
                    </div>
                </div>
                <div className="flex items-center hover:scale-110 transition-all rounded-r-3xl rounded-l-2xl">
                    <div className="bg-red-800 w-2 h-full rounded-l-full"></div>
                    <div className="h-full w-full bg-gray-400 bg-opacity-20 rounded-r-3xl p-2 flex items-center justify-center">
                        <Image src='/images/svg/java.svg' alt="java" height={0} width={120}/>
                    </div>
                </div>
                <div className="flex items-center hover:scale-110 transition-all rounded-r-3xl rounded-l-2xl">
                    <div className="bg-red-800 w-2 h-full rounded-l-full"></div>
                    <div className="h-full w-full bg-gray-400 bg-opacity-20 rounded-r-3xl p-2 flex items-center justify-center">
                        <Image src='/images/svg/react.svg' alt="jsx" height={0} width={120}/>
                    </div>
                </div>
                <div className="flex items-center hover:scale-110 transition-all rounded-r-3xl rounded-l-2xl">
                    <div className="bg-red-800 w-2 h-full rounded-l-full"></div>
                    <div className="h-full w-full bg-gray-400 bg-opacity-20 rounded-r-3xl p-2 flex items-center justify-center">
                        <Image src='/next.svg' alt="nextjs" height={0} width={120}/>
                    </div>
                </div>
                <div className="flex items-center hover:scale-110 transition-all rounded-r-3xl rounded-l-2xl">
                    <div className="bg-red-800 w-2 h-full rounded-l-full"></div>
                    <div className="h-full w-full bg-gray-400 bg-opacity-20 rounded-r-3xl p-2 flex items-center justify-center">
                        <Image src='/images/svg/db.svg' alt="db" height={0} width={120}/>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}