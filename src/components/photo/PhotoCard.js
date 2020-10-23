import React from "react"
import { Card, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom"



export const PhotoCard = ({shot}) => (

    <Card as={Link} to='/home/detail/${shot.id}' color='blue' raised>

        <Image src={shot.pictureUrl} wrapped ui={false}/>
        <Card.Header>{shot.photoTitle}</Card.Header>
        <Card.Description>{shot.notes}</Card.Description>
        <Card.Meta>Source: {shot.sourceUrl}</Card.Meta>
    </Card>
)





{/* <div class="ui card">
        <Link to={'/home/detail/${shot.id}'}>
            <div class="image">
                <img src={shot.photoUrl}>
            </div>
            <div class="content">
        
            <div class="header">{shot.photoTitle}</div>
        </Link>
        <div class="description">{shot.notes}</div>
        
        <div class="meta">Saved from: {shot.sourceUrl}</div>

        </div>
        <div class="extra content">
            <div class="left floated author">added by {shot.origSaverId.username}</div>
        </div>
    </div> */}