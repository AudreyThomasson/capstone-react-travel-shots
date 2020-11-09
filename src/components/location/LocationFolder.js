import React, { useContext, useState, useEffect } from "react"
import { Card, Icon } from 'semantic-ui-react'
import { PhotoContext } from "../photo/PhotoProvider"
import "./Location.css"



export const LocationFolder = ({location}) => {
    const { shots, getShotsByUserFolder } = useContext(PhotoContext)

    // Does the get call with the activeUser from storage and the locationId from Params
    useEffect(() => {
        getShotsByUserFolder(+(localStorage.activeUser), location.id)
    }, [])


    return (
        <>
                <Card  href={`/locations/${location.id}`} raised>

                <Card.Content className='folderImage'>
                <Card.Header as='h3'>{location.name}</Card.Header>
                </Card.Content>
                <Card.Content extra className='pictureIcon'>
                    <Icon name='picture' />
                    {shots.length}
                </Card.Content>
                </Card>
            
        </>
    )
}