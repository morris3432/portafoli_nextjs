import YoutubeIcon from "@/components/icon/yoube";
import GitHubIcon from "@/components/icon/github";
import Animation from "@/components/text_animetion";
import LinkedinIcon from "@/components/icon/linkedin";
import Carousel from "@/components/carucel";
import Link from "next/link";

export default function Home() {
  const git = "https://github.com/morris3432";
  const linkedin = "https://www.linkedin.com/in/cristian-bernardo-yancis-ajuch%C3%A1n-32717a306/";
  const youtube = "https://www.youtube.com/@cristianyancis8464";
  return (
    <div className='w-full h-full absolute flex items-center justify-center'>
      <div className="w-6/12 mt-20"> 
        <h1 className="text-4xl text-center font-extrabold">Hola, soy</h1>
        <Animation/>
        <h1 className="mx-16 text-lg font-semibold">Me gusta aprender cosas nuevas en cada día, me gusta el trabajo en equipo, me gusta la naturaleza, soy una persona autodidacta.</h1>
        <div className="mx-14 mt-5 flex items-center justify-start gap-4">
          <button className="border-2 border-red-800 rounded-full py-2 px-6 hover:bg-red-800">Descargar CV</button>
          <Link href={git} target="_blank"><button className="border-2 border-red-800 rounded-full p-2 hover:bg-red-800"><GitHubIcon width={30} height={30}/></button></Link>
          <Link href={linkedin} target="_blank"><button className='border-2 border-red-800 rounded-full p-2 hover:bg-red-800'><LinkedinIcon height={30} width={30}/></button></Link>
          <Link href={youtube} target="_blank"><button className='border-2 border-red-800 rounded-full p-2 hover:bg-red-800'><YoutubeIcon height={30} width={30}/></button></Link>
        </div>
      </div>

      {/*img*/}
      <div className="w-6/12 flex items-center justify-center ">
        <div className="mt-16">
          <Carousel/>
        </div>
      </div>
    </div>

  );
}
