import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
   <div className="div__headerAndButtons">
      {tasks.length > 0 && (
         <>
            <button className="div__button js-div__button--toggleHideDoneTasks">
               <strong>{hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone</strong>
            </button>
            <button
               className="div__button--markTasksAllDone"
               disabled={tasks.every(({ done }) => done)}
            >
               <strong>Ukończ wszystkie</strong>
            </button>
         </>
      )}
   </div>

);


export default Buttons;