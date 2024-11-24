import Projects from "@/components/my-uis/item";

export default function Proyectos(){
    return(
        <>
            <div className="container mx-auto mt-16">
                <div className=" grid grid-cols-1 sm:grid-cols-4 grid-rows-1 sm:grid-rows-2 gap-4 h-full sm:h-96 p-4 ">
                    <div className="bg-crisp-100  flex items-center justify-center">
                        <h1>ho</h1>
                    </div>
                    <div className="bg-crisp-200">b</div>
                    <div className="bg-gray-100 col-span-1 sm:col-span-2 row-span-1 sm:row-span-2 rounded-3xl p-4 shadow-xl">
                        <div>

                        </div>
                    </div>
                    <div className="bg-crisp-300">d</div>
                    <div className="bg-crisp-400">e</div>
                </div>
                {/*<div className="flex h-64 flex-wrap items-start">
                    <div className="bg-blue-950 p-4 m-2 w-full sm:w-auto">1</div>
                    <div className="bg-blue-950 p-4 m-2 w-full sm:w-auto flex-1">Lorem ipsum dolor sit.</div>
                    <div className="bg-blue-950 p-4 m-2 w-full sm:w-auto">3</div>
                </div> */}
            </div>
        </>
    )
}