import './alltasks.css';
import Category from './category/category';
 import { useContext } from 'react';
 import { AppContext } from '../../App';
const AllTasks=()=>{
  const context=useContext(AppContext)
  const {tasks}=context.state

    const pending ={ id:"category1-pending",title:"Pending", tasks:tasks.filter(x=>x.status==="pending")};
    const started={ id:"category2-started",title:"Started", tasks:tasks.filter(x=>x.status==="started")};
    const completed={id:"category3-completed", title:"Completed", tasks:tasks.filter(x=>x.status==="completed")};
     const allCategories=[pending,started,completed]
    return(
        <div className='alltasks'> 
          {allCategories.map(x=><Category id={x.id} title={x.title} tasks={x.tasks} />)}
        </div>
    ) 
}
export default AllTasks