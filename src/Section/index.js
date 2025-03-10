import "./style.css";

const Section = ({title, body, extraHeaderContent}) => (
   <section className="section sectionAddTask">
               <div className="div__titleTasksList">
                  <h3 className="section__titleNewTask">{title}</h3>
                  {extraHeaderContent}
               </div>
               <div className="div__tasksList">
               {body}
               </div>
   </section>
   
);

export default Section;