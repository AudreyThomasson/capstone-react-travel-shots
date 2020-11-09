import React, { useContext } from "react"
import { Card, Image, Checkbox, CardContent } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import { PhotoContext } from "./PhotoProvider"
import "./Photo.css"



export const PhotoCard = ({shot}) => {
    
    const { addCheckMark, removeCheckMark } = useContext(PhotoContext)
    
    const handleCheckbox = (event, data) => {
        const shotId = data.id
        console.log(`the shot to check ${shotId}`)
        console.log(data.checked)
        data.checked === true ? addCheckMark(shotId): removeCheckMark(shotId)
    }
    
    return (
        <>
            

            <Card color='blue' raised>
                <Image as={Link} to={`/detail/${shot.id}`} src={shot.pictureUrl} wrapped ui ={false}/>
                <CardContent>
                <Card.Header as='h3' >{shot.photoTitle}</Card.Header>
                <Card.Description>Collection: {shot.location.name}</Card.Description>
                <Card.Description href={shot.sourceUrl}>Source: link/website</Card.Description>
                <Card.Description>{shot.notes}</Card.Description>
                </CardContent>
                
                <Card.Content extra>
                <Checkbox 
                            id={shot?.id}
                            name='shot'
                            label='Shot'
                            onChange={handleCheckbox}
                            defaultChecked={shot?.done}
                            className='checkbox'
                        />
                </Card.Content>
            </Card>
        </>
    ) 
}
