import "./style.css"

const Form = () => (
   <form className="form" action="">
      <input className="form__newTask" placeholder="Co jest do zrobienia?" />
      <button className="button">Dodaj zadanie</button>
   </form>
)

export default Form;