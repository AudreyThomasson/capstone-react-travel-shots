import React, { useContext, useEffect, useState } from "react"
import { Card, Header, Image } from 'semantic-ui-react'
import { LocationContext } from "./LocationProvider"
import { LocationFolder } from "./LocationFolder"
import BlueFolder from "../../images/BlueFolder.jpg"

// import "./Location.css"

export const LocationList = () => {
    const { locations, getLocationsByUser } = useContext(LocationContext)

    // Empty dependency array - useEffect only runs after first render
    useEffect(() => {
        getLocationsByUser(+(localStorage.activeUser))
    }, [])


    // useEffect dependency array with dependencies - will run if dependency changes (state)
    // Filters for searchTerms and that the shots belong to the activeUser
    // searchTerms will cause a change
    // useEffect(() => {
    //     if (searchTerms !== "") {
    //         // If the search field is not blank, display matching shots
    //         const subset = shots.filter(shot => shot.photoTitle.toLowerCase().includes(searchTerms.toLowerCase()) && shot.userId === +(localStorage.activeUser))
    //         setFiltered(subset)
    //     } else {
    //         // If the search field is blank, display all shots matching the activeUser
    //         const userShots = shots.filter(shot => shot.userId === +(localStorage.activeUser))
    //         setFiltered(userShots)
    //     }
    // }, [searchTerms, shots])



    return (
        <>            
            <Header as='h2' color='blue' textAlign='center'>
                    Your Collection Folders
            </Header>
            <br/>
            <Card.Group itemsPerRow={4} stackable className='cardHolder'>
            
            <Card href={`/locations/add`} raised>
                <Image src={BlueFolder} wrapped ui ={false}/>
                <Card.Content>
                    <Card.Header color='blue' textAlign='center' as='h3' >Add a Folder</Card.Header>
                </Card.Content>        
            </Card>

            <>
                {
                locations.map(location => {
                    return <LocationFolder key={location.id} location={location} />
                })
                }
            </>
            </Card.Group>


        </>
    )
}