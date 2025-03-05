import "./style.css";

const Buttons = ({tasks, hideDoneTasks}) => {
   if (tasks.length = 0) {
      return null;
   }

   return (
      <div className="div__headerAndButtons">
         <button className="div__button js-div__button--toggleHideDoneTasks">
            {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
         </button>
         <button className={
            `div__button${tasks.every(({ done }) => done) ? " disabled" : " div__button--markTasksAllDone"}`}>
            Ukończ wszystkie
         </button>
      </div>
   )
};

export default Buttons;