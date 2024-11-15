import Projects from "@/components/my-uis/item";

export default function Proyectos(){
    return(
        <>
            <div className='w-full h-full absolute px-5 lg:flex lg:flex-col lg:items-center lg:justify-center'>
                {'items'}
                <section className="flex items-center gap-10">
                    <Projects title={'crud'} info={'hi'} img='crud.png'/>
                </section>
            </div>
        </>
    )
}