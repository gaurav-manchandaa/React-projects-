import React, { useRef } from 'react'
import Input from './Input'
import Model from './Model';
import { Fragment } from 'react';
// import Model from './Model';
function NewProject({oncancel, onsave}) {
    // now in this when a user has clickd on save button i should recive all the values in it 
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const date = useRef();
    function handelSave (){
        const titlevalue = title.current.value;
        const descriptionvalue = description.current.value;
        const duedateval = date.current.value;
        // in this we have to make sure the values that user have to have add something in it 
        if (titlevalue==="" || descriptionvalue==="" || duedateval===""){
            // then we have to show some erro on it 
            // and return from tehe function does not add these values in the object 
            modal.current.open();
            return ;
        }
         onsave({
            title : titlevalue,
            description : descriptionvalue,
            duedate : duedateval
        })
    }
  return (
    <Fragment>
        <Model ref={modal} label="close">
            <p className='font-bold text-2xl '>ERROR </p>
            <p className=' text-lg '>you have not enterd all the details</p>
            <p className=' text-lg '>please fill all the details and try again </p>
        </Model>
    <div className='flex flex-col item-center  mt-20 constainer mx-auto w-full pt-10 max-w-2xl space-y-8'>
        <div className='flex flex-row justify-end space-x-4'>
            <button className='bg-[#1E1817] text-sm md:text-lg px-6 py-2 rounded-xl text-gray-100 opacity-100 hover:opacity-90 shadow-md hover:shadow-gray-500'
            onClick={handelSave}
            > Save </button>
            <button className='bg-[#1E1817] text-sm md:text-lg px-6 py-2 rounded-xl text-gray-100 opacity-100  hover:opacity-90  shadow-md hover:shadow-gray-500'
            onClick={oncancel}
            >Cancel</button>
        </div>
        <div className='flex flex-col space-y-5  '>
        <Input
            label="Title"
            placeholder="title"
            inputtype='text'
            inputstyle="px-5 py-3 outline-none rounded-lg "
            labelstyle="font-bold text-lg"
            ref ={title}
            />
        </div>
        <div className='flex flex-col space-y-5' >
        <Input
            label="Discription"
            placeholder="Discription"
            inputtype='text'
            inputstyle="px-5 py-8 outline-none rounded-xl"
            labelstyle="font-bold text-lg"
     
            ref = {description}
            />
        </div>
        <div className='flex flex-col space-y-5' >
        <Input
            label="Date "
            placeholder=""
            inputtype='date'
            inputstyle="px-2 py-2  outline-none rounded-xl"
            labelstyle="font-bold text-lg"
            ref={date}
            />
        </div>
    </div>
    </Fragment>
  )
}

export default NewProject


// now when user have clicked on the save button then all the content which he has clicked 
// should be save and we should save in the arrays of object
// in the object it would contain titlt , description , data 
// these three it should have contain 
// okay and this object should be present in the app jsx file so it can be reached in all 
// the components there 


