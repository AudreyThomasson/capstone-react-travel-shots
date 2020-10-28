import React, { useContext, useEffect, useState } from "react"
import { Card, Header } from 'semantic-ui-react'
import { PhotoContext } from "./PhotoProvider"
import { PhotoCard } from "./PhotoCard"
import "./Photo.css"

export const PhotoList = () => {
    const { shots, getShots, searchTerms } = useContext(PhotoContext)

    // Since you are no longer ALWAYS displaying all of the shots
    const [ filteredShots, setFiltered ] = useState([])

    // Empty dependency array - useEffect only runs after first render
    useEffect(() => {
        getShots()
    }, [])


    // useEffect dependency array with dependencies - will run if dependency changes (state)
    // Filters for searchTerms and that the shots belong to the activeUser
    // searchTerms will cause a change
    useEffect(() => {
        if (searchTerms !== "") {
            // If the search field is not blank, display matching shots
            const subset = shots.filter(shot => shot.photoTitle.toLowerCase().includes(searchTerms.toLowerCase()) && shot.userId === +(localStorage.activeUser))
            setFiltered(subset)
        } else {
            // If the search field is blank, display all shots matching the activeUser
            const userShots = shots.filter(shot => shot.userId === +(localStorage.activeUser))
            setFiltered(userShots)
        }
    }, [searchTerms, shots])



    return (
        <>

                        
                        <Header as='h2' color='blue' textAlign='center'>
                                Your Shot Collection
                        </Header>
                        <br/>
                        <Card.Group itemsPerRow={4} stackable className='cardHolder'>
                        <>
                            {
                            filteredShots.map(shot => {
                                return <PhotoCard key={shot.id} shot={shot} />
                            })
                            }
                        </>
                        </Card.Group>


        </>
    )
}