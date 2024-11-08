import { Instagram, Mail, Phone, Send } from "lucide-react"

const Contacto=()=>{
    
    return(
        <>
        <div className="mt-16 w-full xl:flex">
            <div className='w-full xl:w-6/12 h-[600px] xl:h-[631px] flex flex-col items-center justify-center'>
                <h2 className='text-4xl text-center font-extrabold text-red-800'>Trabajemos juntos...</h2>
                <form action="https://formsubmit.co/bernardoyancis@gmail.com" method="POST">
                    <input type="email" name="Email" className='w-full bg-transparent p-4 rounded-lg border-2 border-red-800 focus:outline-none mt-4' placeholder='Correo'/>
                    <input type="text" name="Asunto" className='w-full bg-transparent p-4 rounded-xl border-2 border-red-800 focus:outline-none mt-4' placeholder='Asunto'/>
                    <textarea name="mensaje" className='w-full bg-transparent p-4 rounded-xl border-2 border-red-800 focus:outline-none mt-4' placeholder='Escribe tu mensaje'/>
                   <div className='flex items-center justify-center'> <button type='sumit ' className='mt-5 hover:bg-transparent hover:text-red-800 hover:border-red-800 shadow-2xl hover:border-2 bg-red-800 text-white p-4 rounded-xl font-bold flex px-10'>Enviar<Send className='ml-1'/></button></div>
                   <input type='hidden' name='_next' value='https://portafoli-kappa.vercel.app/contacto'/>
                   <input type='hidden' name='_captcha' value='false'/>
                </form>  
            </div>
            <div className=' w-full xl:w-6/12 h-96 xl:h-[631px] flex flex-col items-center xl:items-start justify-center gap-4 xl:gap-2'>
                <div className='flex items-center '> 
                    <Mail className='mr-2' height={40} width={40} />
                    <h1 className='text-xl font-semibold mr-2'>G-Mail:</h1>
                    <p className='text-lg font-light'>bernardoyancis@gmail.com</p>
                </div>

                <div className='flex items-center '>
                    <Phone className='mr-2' height={40} width={40}/>
                    <h1 className='text-xl font-semibold mr-2'>Teléfono:</h1>
                    <p className='text-lg font-light'>+502 5571 - 2918</p>
                </div> 
                <div className='flex items-center '>
                  <Instagram height={40} width={40}/>
                  <h1 className='text-xl font-semibold ml-2'>Instagram:</h1> 
                  <p className='text-lg font-light'>@ajuchan.jsx</p>
                </div>
            </div>
        </div >
        </>
    )
}

export default Contacto