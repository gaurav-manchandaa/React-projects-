import noprojectimg from "../assets/no-projects.png";
export default function Noproject({onselect}) {
  return (
    <div className="flex flex-col space-y-5 justify-center items-center  w-full max-w-2xl container mx-auto ">
      <img src={noprojectimg} alt="no project image" className="h-20 object-contain  " />
      <h1 className="font-bold text-2xl">NO Project Selected </h1>
      <p className="text-gray-400 text-lg">Select a project or get started with new one </p>
      <button className="bg-[#1E1817] text-sm md:text-lg px-6 py-2 rounded-xl text-gray-100 opacity-100 hover:opacity-90 shadow-md hover:shadow-gray-500"
      onClick={onselect}
      >
        {" "}
        Create new Project{" "}
      </button>
    </div>
  );
}
