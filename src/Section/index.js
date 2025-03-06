import "./style.css";

const Section = ({title, body, extraHeaderContent}) => (
   <section className="section__listTasks">
               <div className="div__titleTasksList">
                  <h3 className="section__titleTasksList">{title}</h3>
                  {extraHeaderContent}
               </div>
               <div className="div__tasksList">
               {body}
               </div>
            </section>
);

export default Section;