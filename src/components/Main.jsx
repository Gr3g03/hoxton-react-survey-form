import { useState } from "react";
import Form from "./Form";
import AnswersList from './AnswersList'


function Main(props) {
  const [open, setOpen] = useState(false); //Ignore this state

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {AnswersList}
      </section>
      <section className="main__form">{
        <Form
          setFormState={props.setFormState}
          formState={props.formState}
        />

      }</section>
    </main>
  );
}

export default Main;
