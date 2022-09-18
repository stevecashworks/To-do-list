const reducer=(state,action)=>{
 const {type,payLoad}=action;
 
 switch(type){
    case "add_Task" :return {...state,tasks:[...state.tasks,payLoad]};
    case 'get_Pos': return {...state,position:payLoad}
    case 'drag': console.log(payLoad);return {...state,dragged:payLoad};
    case 'new_stat' : return{...state,entered:payLoad}
    case "change_status": return{...state, tasks:state.tasks.map((task)=>{
        if(payLoad.id===task.id){
            return {...task,status:payLoad.new_Status}
        }
        return task
    })}
    default: return state
 
}
 
}
export default reducer