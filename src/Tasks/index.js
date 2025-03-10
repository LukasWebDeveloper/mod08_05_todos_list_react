import "./style.css"

const Tasks = ({tasks, hideDoneTasks}) => (
   <ul className="tasksList">
      {tasks.map(task => (
         <li  key={task.id}
            className={`tasksList__element${task.done && hideDoneTasks ?
          " tasksList__element--hidden" :
          ""}`}
         >
           <button 
            className={`buttonTask ${task.done ? "button__tasksListItem--ToggleTrue" : "buttonTask__listItem--toggleFalse"}`}>
               
            </button>
         <span className={`tasksList__content${task.done ? " tasksList__content--done" : ""}`}>
            {task.content}
         </span>
         <button className="buttonTask buttonTask--remove">
         </button>
         </li>
      ))}
   </ul>
);

export default Tasks;