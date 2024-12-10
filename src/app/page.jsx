import YoutubeIcon from "@/components/icon/yoube";
import GitHubIcon from "@/components/icon/github";
import Animation from "@/components/text_animetion";
import LinkedinIcon from "@/components/icon/linkedin";
import Carousel from "@/components/carucel";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const git = "https://github.com/morris3432";
  const linkedin = "https://www.linkedin.com/in/cristian-bernardo-yancis-ajuch%C3%A1n-32717a306/";
  const youtube = "https://www.youtube.com/@cristianyancis8464";
  return (
    <div className='w-full h-full absolute flex items-center justify-center'>
      <div className="w-full xl:w-6/12 mt-16 xl:mx-10"> 
        <h1 className="text-4xl text-center font-extrabold mt-1">Hola, soy</h1>
        <div className="h-24 xl:h-auto">
          <Animation/>
        </div>
        <h1 className="mx-16 text-lg font-semibold ">Me gusta aprender cosas nuevas en cada día, me gusta el trabajo en equipo, me gusta la naturaleza, soy una persona autodidacta.</h1>
        <div className="mx-14 mt-5 flex items-center justify-start gap-4">
          <button className="border-2 border-cyan-900 rounded-full py-2 px-6 hover:bg-cyan-900">Descargar CV</button>
          <Link href={git} target="_blank"><button className="border-2 border-cyan-900 rounded-full p-2 hover:bg-cyan-900"><GitHubIcon width={30} height={30}/></button></Link>
          <Link href={linkedin} target="_blank"><button className='border-2 border-cyan-900 rounded-full p-2 hover:bg-cyan-900'><LinkedinIcon height={30} width={30}/></button></Link>
          <Link href={youtube} target="_blank"><button className='border-2 border-cyan-900 rounded-full p-2 hover:bg-cyan-900'><YoutubeIcon height={30} width={30}/></button></Link>
        </div>
      </div>

      {/*img*/}
      <div className="xl:block hidden w-6/12 items-center justify-center ">
        <div className="mt-16 mx-32">
          <Carousel/>
        </div>
      </div>
    </div>

  );
}
