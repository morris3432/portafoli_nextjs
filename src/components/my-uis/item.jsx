import Image from "next/image";

const Projects=({img,title,info})=>{
    const images = `/images/proyect/${img  }`;

    return(
        <>
            <article className="mt-20 shadow-xl shadow-red-700 rounded-3xl">
                <Image src={images} alt="imagen del proyecto" width={350} height={50} className="border-l-2 border-r-2 border-t-2 border-red-800 rounded-t-3xl"/>
                <div className="rounded-b-3xl p-4 border-b-2 border-r-2 border-l-2 border-red-800">
                    <header className="text-3xl font-extrabold">
                        {title}
                    </header>
                    <samp className="">
                        {info}
                    </samp>

                </div>
            </article> 
        </>
    )
}

export default Projects