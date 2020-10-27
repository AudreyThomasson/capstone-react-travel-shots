import React, { useContext, useEffect } from "react"
import { PhotoContext } from "./PhotoProvider"
import "./Photo.css"

export const PhotoSearch = () => {
    const { setSearchTerms } = useContext(PhotoContext)

    useEffect(() => {
        setSearchTerms("")
    }, [])

    return (
        <>
            Photo search:
            <input type="text"
                className="input--wide"
                onKeyUp={
                    (keyEvent) => setSearchTerms(keyEvent.target.value)
                }
                placeholder="Search for a shot... " />
        </>
    )
}