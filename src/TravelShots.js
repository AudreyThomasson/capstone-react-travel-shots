import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./components/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"
import { Login } from "./components/auth/Login3"
import { Register } from "./components/auth/Register"

export const TravelShots = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("activeUser")) {
                return (
                    <>
                        <NavBar />
                        <ApplicationViews />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }}>
        </Route>
        
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
    </>
);