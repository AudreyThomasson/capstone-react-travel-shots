import React, { useState, createContext } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const LocationContext = createContext()

/*
 This component establishes what data can be used.
 */
export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
            .then(res => res.json())
            .then(setLocations)
    }

    const getLocationsByUser = (userId) => {
        return fetch(`http://localhost:8088/locations?userId=${userId}`)
            .then(res => res.json())
            .then(setLocations)
    }

    const addLocation = locationObj => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locationObj)
        })
            .then(getLocations)
    }

    const getLocationById = (id) => {
        return fetch(`http://localhost:8088/locations/${id}?_embed=users`)
            .then(res => res.json())
    }

    const updateLocation = location => {
        return fetch(`http://localhost:8088/locations/${location.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
    }
    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
    return (
        <LocationContext.Provider value={{
            locations, getLocations, getLocationsByUser, addLocation, getLocationById, updateLocation
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}