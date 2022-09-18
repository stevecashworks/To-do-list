import './todoitem.css'
import { useContext} from 'react'
import { AppContext } from '../App'

const TodoItem=({name,desc,id})=>{
  const {dispatch,state}=useContext(AppContext);
 const{entered}=state
const dragStart=(e)=>{
  // e.preventDefault();
  dispatch({type:'drag',payLoad:id});

  
 
}
const dragEnd=(e)=>{
//  console.log(entered)
 dispatch({type:'change_status',payLoad:{id,new_Status:entered}})
}



  return (
    <div className="todo-item"
  id={id} draggable={true}onDragEnd={dragEnd} onDragStart={dragStart}>
      <h1>{name}</h1>
       <p className="description">{desc}</p>
    
    </div>
  )
}
export default TodoItem