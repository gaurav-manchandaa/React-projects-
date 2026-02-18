// in this i have to showsubtasks that are added by the user 
// and in this i have to do some really good tasks 

export default function Showsubtasks(){
    // in this we have to showsubtask in that we will add now the 
    return (
        <div className="flex items-center flex-col">
            <div className="flex space-x-4 mb-5 mt-5 p-4 ">
                <input type="text" className="px-4 py-4 outline-none border-none bg-stone-200 rounded-md" placeholder="add task" />
                <button className="bg-[#1E1817] text-sm md:text-lg px-6 py-2 rounded-xl text-gray-100 opacity-100 hover:opacity-90 shadow-md hover:shadow-gray-500">ADD task </button>
            </div>
            <ol >
                <li className="flex space-x-5 mt-5 mb-5  "><p>task name </p> <button>Delete</button></li>
            </ol>
        </div>
    )
}