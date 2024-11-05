import Sidebar from "@/components/sidebar";

const ResumenLayout=({children})=>{
    return(
        <><div className="mt-20 xl:flex xl:items-center xl:justify-start">
            <div className="w-full xl:w-6/12">
                <Sidebar />
            </div>
            <div className="w-full xl:w-6/12 ">
                {children}
            </div>
        </div>
        </>
    )
}

export default ResumenLayout;