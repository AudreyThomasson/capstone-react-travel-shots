import React, { useContext, useEffect } from "react"
import { PhotoContext } from "./PhotoProvider"
import "./Photo.css"
import { Input } from "semantic-ui-react"

export const PhotoSearch = () => {
    const { setSearchTerms } = useContext(PhotoContext)

    useEffect(() => {
        setSearchTerms("")
    }, [])

    return (
        <>
            <div className='searchBox'>
            <Input
                icon='search'
                type="text"
                className="input--wide"
                onKeyUp={
                    (keyEvent) => setSearchTerms(keyEvent.target.value)
                }
                placeholder="Search by Photo Title... " />
            </div> 
        </>
    )
}
