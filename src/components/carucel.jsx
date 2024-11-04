'use client'
import Image from "next/image"
import { useState } from "react"
import styles from '../styles/carrusel.module.css'

const Carousel=(props)=>{
    const imagenes = ['/images/log.png', '/images/yo.jpg'];
    const [selectIndex, setSelectIndex] = useState(0);
    const [selectImage, setSelectImage] = useState(imagenes[0]);

    const selectNextImage = (index, images = [], next = true) => {
        const condition = next ? index < images.length - 1 : index > 0;
        const nextIndex = next 
            ? (condition ? index + 1 : 0) 
            : (condition ? index - 1 : images.length - 1);
        
        setSelectImage(images[nextIndex]);
        setSelectIndex(nextIndex);
    };

    const previous = () => {
        selectNextImage(selectIndex, imagenes, false);
    };

    const next = () => {
        selectNextImage(selectIndex, imagenes, true);
    };

    return (
    <>
        <Image src={selectImage} alt="carusel de imagenes" width={500} height={0} className={styles.carrusel}/>
        <div className="flex justify-center items-cente gap-4">        
            <button onClick={previous} className="  text-black rounded-xl px-4 font-extrabold">{'<'}</button>
            <button onClick={next} className=" text-black rounded-xl px-4 font-extrabold">{'>'}</button>
        </div>
    </>
    )
}

export default Carousel