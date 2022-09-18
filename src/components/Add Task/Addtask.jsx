import "./Addtask.css";
import {useContext, useState} from "react";
import { AppContext } from "../../App";

const AddTask=()=>{
    const {dispatch,state}=useContext(AppContext)
    const {tasks}=state;
      
    const  [taskName,setTaskName]=useState("")
    const  [taskDesc,setTaskDesc]=useState("")
    const handleSubmit=(e)=>{
       
        e.preventDefault();
        console.log(`name: ${taskName}  description: ${taskDesc}`);
        dispatch({type:'add_Task',payLoad:{name:taskName,desc:taskDesc,status:"pending",id:`task${tasks.length+1}`}})

    }
    const changeDesc=(val)=>{
        setTaskDesc(val)
    }
    const changeName=(val)=>{
        setTaskName(val)
    }

    return(
        
        <form className="form" onSubmit={(e)=>handleSubmit(e)}>

            <input placeholder="Input the name of the task" type="text" onChange={(e)=>{changeName(e.target.value)}}/>
            <textarea placeholder="briefly describe the task" type="text" onChange={(e)=>{changeDesc(e.target.value)}}>
            </textarea>
            <button type="submit" className='blue-btn'>Add Task</button>
        </form>
    )
}
export default AddTask