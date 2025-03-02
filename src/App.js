import Form from "./Form";
import Tasks from "./Tasks";

const tasks = [
   { id: 1, content: "przejść na Reacta", done: false, },
   { id: 2, content: "zjeść śniadanie", done: true, },
];

const hideDoneTasks = false;
// Pauza na 25m filmu 08.03

function App() {
   return (
      <div>
         <header className="header">
            <h1 className="header__title">Lista zadań</h1>
         </header>
         <main className="main">
            <div className="div__addTasks">
               <div>
                  <h3 className="section__titleNewTask">Dodaj nowe zadanie</h3>
               </div>
               <div>
                  <Form />
               </div>
            </div>
            <div className="div__listTasks">
               <div className="div__titleTasksList">
                  <h3 className="section__titleTasksList">Lista zadań</h3>
                  <div className="div__headerAndButtons">
                  </div>
               </div>
               <div className="div__tasksList">
                  <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
               </div>
            </div>
         </main>
      </div>
   );
}

export default App;
