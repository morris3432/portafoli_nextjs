'use client'
import { TypeAnimation } from "react-type-animation"

export default function Animation (){    
    return(
    <div className="p-2 text-4xl text-center font-extrabold text-red-800">
        <TypeAnimation 
            sequence={['Cristian Bernardo Yancis Ajuchán',2000
              ,'Desarrollador Web',2000,
              'Desarrollador Junior',2000
              ,'Desarrollador Frontend',2000,
            ]}
            wrapper="span"
            speed={50}
            style={{display:'inline-block'}}
            repeat={Infinity}
        /> 
    </div>
    )
}