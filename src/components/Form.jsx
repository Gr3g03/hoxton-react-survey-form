import BestFeatures from "./CheckBoxes/BestFeatures";
import TimeSpent from "./CheckBoxes/TimeSpent.jsx";
import WorstFetures from "./CheckBoxes/WorstFeatures";
import Colour from "./RadioButtons/Colour.jsx";
import Consistency from "./RadioButtons/Consistency";
import Logo from "./RadioButtons/Logo.jsx";

export default function Form(props) {
    return (
        <form className="form">

            <h2>Tell us what you think about your rubber duck!</h2>

            <div className="form__group">
                <h3>What would you say that are the best features of your rubber duck?</h3>
                <BestFeatures
                    formState={props.formState}
                    setFormState={props.setFormState}
                />
            </div>

            <div className="form__group">
                <h3>What would you say that are the worst bits of your rubber duck?</h3>
                <TimeSpent
                    formState={props.formState}
                    setFormState={props.setFormState}
                />
            </div>

            <div className="form__group radio">
                <h3>How do you rate your rubber duck consistency?</h3>
                <Consistency
                    formState={props.formState}
                    setFormState={props.setFormState} />


            </div>

            <div className="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>
                <Colour
                    formState={props.formState}
                    setFormState={props.setFormState} />
            </div>

            <div className="form__group radio">
                <h3>How do you rate your rubber duck logo?</h3>
                <Logo
                    formState={props.formState}
                    setFormState={props.setFormState} />
            </div>

            <div className="form__group">
                <h3>How do you like to spend time with your rubber duck</h3>
                <WorstFetures
                    formState={props.formState}
                    setFormState={props.setFormState}
                />
            </div>

            <label>
                What else have you got to say about your rubber duck?
                <textarea
                    name="review"
                    cols={30}
                    rows={10}
                    onChange={function (event) {
                        const newFormState = { ...props.formState, review: event.target.value }
                        props.setFormState(newFormState)
                    }}
                >
                </textarea>
            </label>

            <label>
                Put your name here (if you feel like it):
                <input
                    type="text"
                    name="username"
                    value={props.formState.username}
                    onChange={function (event) {
                        const newFormState = { ...props.formState, username: event.target.value }
                        props.setFormState(newFormState)
                    }}
                />
            </label>

            <label>
                Leave us your email pretty please??
                <input
                    type="email"
                    name="email"
                    value={props.formState.email}
                    onChange={function (event) {
                        const newFormState = { ...props.formState, email: event.target.value }
                        props.setFormState(newFormState)
                    }}
                />
            </label>

            <input className="form__submit" type="submit" value="Submit Survey!" />

        </form>

    )

}
