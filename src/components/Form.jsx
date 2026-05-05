import { useState } from "react"

export default function Form() {
    // const [username, setUsername] = useState("")
    // const [password, setPassword] = useState(""), 

    const [formData, setFormData] = useState(
        {
            username: "",
            password: ""
        }
    )

    function handleOnChnage(event){

        setFormData(
          {
            ...formData,
            [event.target.name] : event.target.value,
          }
        )

    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={formData.username} onChange={handleOnChnage} />
                <input type="password" name="password" value={formData.password} onChange={handleOnChnage} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}