import Image from "next/image";

const Projects=({img,title,info})=>{
    const images = `/images/proyect/${img  }`;

    return(
        <>
            <article className="flex gap-2 p-5  rounded-3xl border-2 border-red-800">
                <Image src={images} alt="imagen del proyecto" width={250} height={50}/>
                <div>
                    <header className="text-3xl font-extrabold">
                        {title}
                    </header>
                    <samp className="text-xl font-light">
                        {info}
                    </samp>
                    <button>ver más</button>
                </div>
            </article>
        </>
    )
}

export default Projects