//tasks for tonight
//create the todo app from scratch with the following modifications
//add  a form  to add and remove  tasks
//make the advice to be blinking and a different color for each type of  advice
 import './App.css'
 import AddTask from './components/Add Task/Addtask'
 import AllTasks from './components/AllTasks/AllTasks.jsx'  
 import { createContext,useReducer } from 'react'
import reducer from './reducer'


 export const AppContext=createContext(null)
 const App=()=>{
   const defaultState={tasks:[],dragged:null,entered:''}
   const [state,dispatch]=useReducer(reducer,defaultState);
  //  console.log(state.tasks)
   
   
   
  
  return(
      <AppContext.Provider value={{state:state,dispatch:dispatch}}>

        <div className='App'>
         <AllTasks/>
         <AddTask/>

        </div>
      </AppContext.Provider>
     )
 }
 export default App