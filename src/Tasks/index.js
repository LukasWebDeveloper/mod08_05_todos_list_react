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
            className="buttonTask buttonTask--toggleDone">
               {task.done ? "✓" : ""}
            </button>
         <span className={`tasksList__content${task.done ? " tasksList__content--done" : ""}`}>
            {task.content}
         </span>
         <button className="buttonTask buttonTask--remove">
         <span className="button__markWastebasket"><strong>🗑</strong></span>
         </button>
         </li>
      ))}
   </ul>
);

export default Tasks;