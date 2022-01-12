
export default function BestFeatures(props) {
    return (
        <ul>
            <li>
                <label
                ><input name="bestFeatures" type="checkbox" value="colour"
                    onChange={function (event) {
                        const newFormState = { ...props.formState, colur: event.target.value }
                        props.setFormState(newFormState)
                        console.log(newFormState)
                    }}
                    />
                    It's yellow!
                </label>
            </li>
            <li>
                <label
                ><input name="bestFeatures" type="checkbox" value="sound"
                    onChange={function (event) {
                        const newFormState = { ...props.formState, sound: event.target.value }
                        props.setFormState(newFormState)
                        console.log(newFormState)
                    }} />
                    It squeaks!
                </label>
            </li>
            <li>
                <label
                ><input name="bestFeatures" type="checkbox" value="logo"
                    onChange={function (event) {
                        const newFormState = { ...props.formState, logo: event.target.value }
                        props.setFormState(newFormState)
                        console.log(newFormState)
                    }} />
                    It has a logo!
                </label>
            </li>
            <li>
                <label>
                    <input name="bestFeatures" type="checkbox" value="size"
                        onChange={function (event) {
                            const newFormState = { ...props.formState, size: event.target.value }
                            props.setFormState(newFormState)
                            console.log(newFormState)
                        }} />
                    Its big!
                </label>
            </li>
        </ul>
    )
}