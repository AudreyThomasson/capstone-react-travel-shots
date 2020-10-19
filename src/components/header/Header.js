import React from "react"
import { useHistory } from "react-router-dom"

export const HeaderWelcome = () => {

    const username = localStorage.getItem("username")
    const history = useHistory()

    const clearStorage = () => {
        localStorage.clear()
        history.push("/")
    }

    return (
    <>
        <h2>Hello, {username}!</h2>
        <button onClick={clearStorage}>
            Log Out
        </button>
    </>  
    )
}
