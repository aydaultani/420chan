import { useState } from "react"
import AdminPanel from "./components/AdminPanel"

export default function Admin() {

    const [key , setKey] = useState("")
    const [loggedIn , setLogin] = useState(false)
    const [result , setResult] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        if (key === "KEY") {
            setLogin(true)
        }
        else {
            setResult("Wrong Key")
        }
    }

    if (loggedIn) {
        return (
            <AdminPanel />
        )
    }
    else {
        return (
            <form onSubmit={handleSubmit}>
                <label>KEY: </label><input onChange={(e) => setKey(e.target.value)}></input>
                <h1>{result}</h1>
            </form>
    )

    }
}