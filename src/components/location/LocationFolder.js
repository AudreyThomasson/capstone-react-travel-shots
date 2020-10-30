import React, { useContext, useState } from "react"
import { Card, Image } from 'semantic-ui-react'
import BlueFolder from "../../images/BlueFolder.jpg"
import { LocationContext } from "./LocationProvider"
import { useHistory } from 'react-router-dom'



export const LocationFolder = ({location}) => {


    return (
        <>
            <Card  href={`/locations/${location.id}`} raised>
                <Image src={BlueFolder} wrapped ui ={false}/>
                
                <Card.Content>
                    <Card.Header color='blue' textAlign='center' as='h3' >{location.name}</Card.Header>
                </Card.Content>        
                
            </Card>
        </>
    )
}


           {/* Card with Background Folder and Writing on top 
            <Card.Content
                style={{
                    height: "200px",
                    backgroundImage: BlueFolder,
                    backgroundSize: "cover",
                }}
                as={Link} to={`/locations/${location.id}`}
            >
            <Card.Description as='h3' style={{ color: "white" }}>
            {location.name}
            </Card.Description>
            </Card.Content>
         */}