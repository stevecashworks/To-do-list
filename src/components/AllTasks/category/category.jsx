import './category.css';
import Task from '../../ToDoItem'
import { useContext } from 'react';
import { AppContext } from '../../../App';


 const Category=({title,tasks,id})=>{
    // console.log(id)
    const {dispatch}=useContext(AppContext)
    
    const dragEnter=(e)=>{
        e.preventDefault()
        dispatch({type:'new_stat',payLoad:id.split('-')[1]});
    }
    const categoryColors={Pending:'rgba(248, 179, 202,.6)',Completed:'rgba(174, 253, 174,.6)',Started:"rgba(252, 252, 84,.6)"}
    return(
        <div className="category"id={id}onDragOver={(e)=>e.preventDefault()} onDragEnter={dragEnter} style={{backgroundColor:categoryColors[title]}}>
            <h3 className='title'>{title}</h3>
            {tasks.map(x=><Task key={x.id}id={x.id} name={x.name} desc={x.desc } />)}

        </div>
    )
 }
 export default Category
 