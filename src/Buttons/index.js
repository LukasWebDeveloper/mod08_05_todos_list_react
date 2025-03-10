import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
   <div className="div__headerAndButtons">
      {tasks.length > 0 && (
         <>
            <button className="div__button div__button--toggleHideDoneTasks">
               {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
               className="div__button--markTasksAllDone"
               disabled={tasks.every(({ done }) => done)}
            >
               Ukończ wszystkie
            </button>
         </>
      )}
   </div>

);


export default Buttons;