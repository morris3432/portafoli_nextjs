import Image from "next/image";
import GitHubIcon from "../icon/github";

const Projects=({img,title,info,github})=>{
    const images = `/images/proyect/${img}.png`;
    const githubLink = github? <a className="flex items-center text-cyan-500 hover:text-cyan-700" href={github} target="_blank" rel="noopener noreferrer"><GitHubIcon height={30} width={30} className='mr-2' /> Ver código en GitHub</a> : null;
    
    return(
        <>
        <div className="col-span-1 h-[391px] flex flex-col justify-between">
            <div className="relative w-full h-[240px] rounded-2xl before:absolute before:bottom-0 before:left-1/2 
                            before:w-[25px] before:h-[25px] before:bg-transparent before:rounded-full before:shadow-before 
                            after:absolute after:bottom-[70px] after:left-0 after:w-[25px]  after:h-[25px] after:bg-transparent 
                            after:rounded-full after:shadow-after bg-cover"
                style={{ backgroundImage: `url(${images})` }}></div>
            <div className="relative w-full h-[150px] rounded-2xl rounded-tl-none border-2 border-cyan-800 py-2 px-4 bg-black text-white">
                <span className="absolute left-[-2px] w-7/12 h-[50px] -top-[50px] rounded-2 border-cyan-800 border-t-2
                                border-r-2 border-l-2 rounded-tr-[25px] bg-black flex items-center p-2">
                    {githubLink}
                </span>
                <h1 className="text-3xl font-extrabold text-cyan-700">
                    {title}
                </h1>
                <p className="mt-2">
                    {info}
                </p>
            </div>
        </div>
        </>
    )
}

export default Projects