export default function Username(props) {

    return (
        <input
            type="text"
            name="username"
            value=""
            onChange={function (event) {
                const newFormState = { ...props.formState, username: event.target.value }
                props.setFormState(newFormState)
                console.log(newFormState)
            }}
        />
    )
}