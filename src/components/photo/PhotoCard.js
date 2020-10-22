import React from "react"
import { Card } from 'semantic-ui-react'

const extra = (
    <>
        'added by {shot.origSaverId.username}'
    </>
  )

export const PhotoCard = ({shot}) => (
    <Card
        link={'/home/detail/${shot.id}'}
        image={shot.photoUrl}
        header={shot.photoTitle}
        description={shot.notes}
        meta='Saved from {shot.sourceUrl}'
        extra={extra}
        color='blue'
        raised
    />
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