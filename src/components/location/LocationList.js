import React, { useContext, useEffect, useState } from "react"
import { Card, Header, Icon } from 'semantic-ui-react'
import { LocationContext } from "./LocationProvider"
import { LocationFolder } from "./LocationFolder"
import "./LocationList.css"
import { PhotoProvider } from "../photo/PhotoProvider"


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
            
            <Card href={`/locations/add`} raised className='card'>
                <Card.Content className='folderImage'>
                    <Card.Header  as='h3' >Add a Folder</Card.Header>
                </Card.Content>
                <Card.Content extra className='pictureIcon'>
                    <Icon name='add' />
                </Card.Content>        
            </Card>

            <>

                {
                locations.map(location => {
                    return <PhotoProvider key={location.id}><LocationFolder key={location.id} location={location} /></PhotoProvider>
                })
                }
            </>
            </Card.Group>


        </>
    )
}