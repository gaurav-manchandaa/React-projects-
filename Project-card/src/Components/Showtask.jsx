import Showsubtasks from "./Showsubtasks"
export default function Showtask({
    title,
    description,
    duedate,
    id,
    onselect
}){
    return(
        <div className="mt-20 ml-20  ">
            <header>
                <div className="flex items-center justify-between font-medium">
                    <h2 className="text-3xl ">{title}</h2>
                    <button className="bg-[#1E1817] text-sm md:text-lg px-6 py-2 rounded-xl text-gray-100 opacity-100 hover:opacity-90 shadow-md hover:shadow-gray-500'"
                    onClick={()=>onselect(id)}
                    >Delete</button>
                </div>
                <div className="mt-20  text-lg  space-y-6 ">
                <p className="">{duedate}</p>
                <p>{description}</p>
                </div>
                
            </header>
            // taks that will be build under that project
            <Showsubtasks/>
        </div>
    )
}