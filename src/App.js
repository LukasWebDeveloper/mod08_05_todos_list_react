import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
   { id: 1, content: "przejść na Reacta", done: false, },
   { id: 2, content: "zjeść kolacje", done: true, },
];

const hideDoneTasks = false;


function App() {
   return (
      <Container>
         <Header
            title="Lista zadań"
         />
         <main className="main">
            <Section
               title1="Dodaj nowe zadanie"
               body1={<Form />}
            
               title="Lista zadań"
               body={
                  <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
               }
               extraHeaderContent={
                  <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
               }
            />
         </main>
      </Container>
   );
}

export default App;
