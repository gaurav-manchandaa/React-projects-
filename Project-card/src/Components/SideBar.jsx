import React from "react";

function SideBar({ onselect, lists ,onprojectclick}) {
  return (
    <aside className="bg-[#15161D] w-1/3 h-screen mt-20 rounded-r-lg md:w-80  p-20 flex flex-col space-y-10  items-start  ">
      <h1 className="uppercase text-stone-100 md:text-xl text-lg font-medium ">
        YOUR PROJECTS{" "}
      </h1>
      <button
        className="bg-[#393430] text-sm md:text-lg px-6 py-3 rounded-xl text-gray-100 opacity-70  hover:opacity-100 "
        onClick={onselect}
      >
        +Add Project{" "}
      </button>
      <ul>
        {/* in this we will enter elements later on  */}
        {lists.map((task) => (
          <li key={task.id}>
            <button className="bg-stone-500 font-bold py-3 px-8 mt-2 text-lg uppercase rounded-lg text-white/60 hover:text-white/70 hover:bg-stone-600"
            onClick={()=>onprojectclick(task.id)}
            >
              {task.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;
// now when we click add button some function would be run
// and we should able to see the display in which we can enter the content
// which we want
// then okay lets do it
