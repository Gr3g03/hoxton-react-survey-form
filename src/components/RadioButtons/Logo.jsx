
export default function Logo(props) {
    return (

        <ul>

            <li>
                <input id="consistency1" type="radio" name="consistency" value="1" />
                <label htmlFor="consistency1"
                    onChange={function (event) {
                        const newFormState = { ...props.formState, consistency: event.target }
                        props.setFormState(newFormState)
                        console.log(newFormState)
                    }}
                >
                    1
                </label>
            </li>

            <li>
                <input id="consistency2" type="radio" name="consistency" value="2" />
                <label htmlFor="consistency2">
                    2
                </label>
            </li>

            <li>
                <input id="consistency3" type="radio" name="consistency" value="3" />
                <label htmlFor="consistency3">
                    3
                </label>
            </li>

            <li>
                <input id="consistency4" type="radio" name="consistency" value="4" />
                <label htmlFor="consistency4">
                    4
                </label>
            </li>

        </ul>

    )

}