const toDoData=[
    {task:'Wake UP', done:true, },
    {task:' Pray to God',done:false, },
    {task:'freshen Up', done:false, },
    {task:'Meditate', done:true,} ,
    {task:'Study', done:false, },
]

toDoData.forEach(x=>x.id=toDoData.indexOf(x))

console.log(toDoData)
export default toDoData