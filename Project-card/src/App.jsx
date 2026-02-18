import SideBar from "./Components/SideBar";
import NewProject from "./Components/NewProject";
import Noproject from "./Components/Noproject";
import { useState } from "react";
import Showtask from "./Components/Showtask";
function App() {
  const [projectsadded, setprojectsadded] = useState({
    Tasksprojectid: undefined,
    tasksproject: [],
  });

  function handelDeletion (projectid){
    // in this handel deletion when clicked it would do two task set Taskprojectid = undifined
    //and would make an new array and would return
    const updatedtask = projectsadded.tasksproject.filter(project=>project.id!=projectid)
    setprojectsadded((prev)=>{
      return {
        ...prev,
        Tasksprojectid:undefined,
        tasksproject :[...updatedtask]
      }
    })

  }

  function handeladdchange() {
    setprojectsadded((prev) => {
      return {
        ...prev,
        Tasksprojectid: null,
      };
    });
  }


  function handelsidebarclick(projectid) {
    setprojectsadded((prev) => {
      return {
        ...prev,
        Tasksprojectid: projectid,
      };
    });
  }

  function handelcancel() {
    setprojectsadded((prev) => {
      return {
        ...prev,
        Tasksprojectid: undefined,
      };
    });
  }

  function updatetasksproject(taskdata) {
    // in this you would get all these data from the object
    setprojectsadded((prev) => {
      const newproject = {
        ...taskdata,
        id: Math.random(),
      };
      return {
        ...prev,
        Tasksprojectid: undefined,
        tasksproject: [...prev.tasksproject, newproject],
      };
    });
  }
  console.log(projectsadded);

  let project = projectsadded.tasksproject.find(
    (project) => project.id === projectsadded.Tasksprojectid
  );
  // now this have given me the project id i have needed here
  // now this would be returned in it

  let displaycontent;
  if (projectsadded.Tasksprojectid === undefined) {
    displaycontent = <Noproject onselect={handeladdchange} />;
  } else if (projectsadded.Tasksprojectid === null) {
    displaycontent = (
      <NewProject onsave={updatetasksproject} oncancel={handelcancel} />
    );
  } else
    displaycontent = (
      <Showtask
        title={project.title}
        description={project.description}
        duedate={project.duedate}
        id={project.id}
        onselect ={handelDeletion}
      />
    );

  return (
    <div className="flex flex-row item-center ">
      <SideBar
        onselect={handeladdchange}
        lists={projectsadded.tasksproject}
        onprojectclick={handelsidebarclick}
      />
      {displaycontent}
    </div>
  );
}

export default App;

// now in this i have to add funtionality in the button
// in such a way that which part of the UI should display in the
// now in this we are dealling with an two useState
// but we only need one usesatte to settle down all these

// 2-> until now we have this changing states na now i have to add extract all the values
// from the inputs fields and give it to the object that needs it

// we are at the position in which we have to

// now in this i have to do functionalty
// by which when the side button is clicked then that

// show task is demanding an the item that it have to render
// okay to give this part we have to give him the id of the that specific
