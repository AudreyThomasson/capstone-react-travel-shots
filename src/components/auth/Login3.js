import React, { useRef } from "react"
import { Button, Form, Header, Container } from 'semantic-ui-react'
import { useHistory, Link } from "react-router-dom"
import "./Login3.css"


export const Login = props => {
    const username = useRef()
    const existDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?username=${username.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem("activeUser", exists.id)
                    localStorage.setItem("username", exists.username)
                    history.push("/home")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>

            <Container>
                <Form className="form--login" onSubmit={handleLogin}>
                    <Header as='h1'>Travel Shots</Header>
                    <Header as='h3'>Please sign in</Header>
                    <Form.Field>
                        <label htmlFor="inputUsername"> Username </label>
                            <input ref={username} type="username"
                                id="username"
                                className="form-control"
                                placeholder="Username"
                                required autoFocus />
                    </Form.Field>
                    
                    <Form.Field>
                        <Button type="submit">
                            Sign in
                        </Button>
                    </Form.Field>
            <br/>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
                </Form>
            </Container>
        </main>
    )
}
