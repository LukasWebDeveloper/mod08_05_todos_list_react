import "./style.css";

const Section = ({ title, title1, body, body1, extraHeaderContent }) => (
   <>
      <section className="section sectionAddTask">
         <div>
            <h3 className="section__titleNewTask">{title1}</h3>
         </div>
         <div> {/*  className="div__tasksList" */}
            {body1}
         </div>
      </section>
      <section className="section sectionTasks">
         <div className="div__tasksList">
            <h3 className="section__titleTasksList">{title}</h3>
            {extraHeaderContent}
         </div>
         {body}
      </section>
   </>

);

export default Section;