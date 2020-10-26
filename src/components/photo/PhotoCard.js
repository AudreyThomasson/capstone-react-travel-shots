import React from "react"
import { Card, Image, Checkbox } from 'semantic-ui-react'
import { Link } from "react-router-dom"



export const PhotoCard = ({shot}) => (
    <>
        <Card color='blue' raised>
            <Image as={Link} to={`/detail/${shot.id}`} src={shot.pictureUrl} wrapped ui ={false}/>
            <Card.Header as='h4' >{shot.photoTitle}</Card.Header>
            <Card.Description>Collection: {shot.location.name}</Card.Description>
            <Card.Description href={shot.sourceUrl}>Source: link/website</Card.Description>
            <Card.Description>{shot.notes}</Card.Description>
            <br/>
            <Checkbox 
                        disabled
                        id={shot?.id}
                        name='shot'
                        label='Shot'
                        defaultChecked={shot?.done}
                    />
        </Card>
    </>
)
