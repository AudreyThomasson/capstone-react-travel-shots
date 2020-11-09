import React, { useState, createContext } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const PhotoContext = createContext()

/*
 This component establishes what data can be used.
 */
export const PhotoProvider = (props) => {
    const [shots, setShots] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    const getShots = () => {
        return fetch("http://localhost:8088/shots?_expand=location")
            .then(res => res.json())
            .then(setShots)
    }

    const getShotsByUserFolder = (userId, locationId) => {
        return fetch(`http://localhost:8088/shots?userId=${userId}&locationId=${locationId}&_expand=location`)
            .then(res => res.json())
            .then(setShots)
    }

    const addShot = photoObj => {
        return fetch("http://localhost:8088/shots", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(photoObj)
        })
    }

    const getShotById = (id) => {
        return fetch(`http://localhost:8088/shots/${id}?_expand=location&_expand=user`)
            .then(res => res.json())
    }

    const deleteShot = shotId => {
        return fetch(`http://localhost:8088/shots/${shotId}`, {
            method: "DELETE"
        })
    }

    const updateShot = shot => {
        return fetch(`http://localhost:8088/shots/${shot.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(shot)
        })
    }

    const addCheckMark = (shotId) => {
        return fetch(`http://localhost:8088/shots/${shotId}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                done: true
            })
        })
    }

    const removeCheckMark = (shotId) => {
        return fetch(`http://localhost:8088/shots/${shotId}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                done: false
            })
        })
    }

    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
    return (
        <PhotoContext.Provider value={{
            shots, getShots, getShotsByUserFolder, addShot, getShotById, deleteShot, updateShot, addCheckMark, removeCheckMark, searchTerms, setSearchTerms
        }}>
            {props.children}
        </PhotoContext.Provider>
    )
}