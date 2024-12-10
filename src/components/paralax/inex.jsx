'use client'
import React from "react"
import YoutubeIcon from "@/components/icon/yoube";
import GitHubIcon from "@/components/icon/github";
import Animation from "@/components/text_animetion";
import LinkedinIcon from "@/components/icon/linkedin";
import Carousel from "@/components/carucel";
import Link from "next/link";
import Image from "next/image";
import { Parallax } from "react-parallax"

export function Parallaxs(){
    const image1 = '/images/img2.jpg';
    const image2 = '/images/paisaje.jpg';
    const image3 = '/images/image1.png'
    const git = "https://github.com/morris3432";
    const linkedin = "https://www.linkedin.com/in/cristian-bernardo-yancis-ajuch%C3%A1n-32717a306/";
    const youtube = "https://www.youtube.com/@cristianyancis8464";  

    return(
        <div className="margin">
            <Parallax bgImage={image1} strength={400} >
                <div className="flex flex-col w-screen h-screen items-center justify-center">
                    <Animation />
                </div>
            </Parallax>
            <div className="p-5">
                <h1 className="text-2xl font-bold">
                    Presentacion 
                </h1>
                <p className="text-xl">
                    Soy Cristian Bernardo Yancis, un desarrollador web profesional con experiencia en front-end y back-end. Me gusta trabajar en proyectos de gran escala y soluciones innovadoras.
                </p>
            </div>
            <Parallax bgImage={image2} blur={{min:1, max:10}}>
                <div className="flex flex-col w-full h-screen items-center justify-center">
                    <h1 className="text-">
                        Puedes ver mas de mi y mis proyectos personales en:
                    </h1>
                    <div className="flex flex-row justify-center">
                        <a href={git} target="_blank" className="text-2xl">
                            <GitHubIcon />
                        </a>
                        <a href={linkedin} target="_blank" className="ml-5 text-2xl">
                            <LinkedinIcon />
                        </a>
                        <a href={youtube} target="_blank" className="ml-5 text-2xl">
                            <YoutubeIcon />
                        </a>
                    </div>
                </div>
            </Parallax>
            <div className="p-5">
                <h1 className="text-2xl font-bold">
                    Proyectos
                </h1>
                <Carousel />
            </div>
            <Parallax bgImage={image3} strength={400} >
                <div className="flex flex-col w-screen h-screen items-center justify-center">
 
                    <div className="flex flex-row justify-center">
                        hi
                    </div>
                </div>
            </Parallax>
        </div>
    )
}