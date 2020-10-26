import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { Card, Image, Checkbox, Button } from 'semantic-ui-react'
import { PhotoContext } from "./PhotoProvider"


export const PhotoDetail = () => {
    const { getShotById, deleteShot } = useContext(PhotoContext)
	console.log('hello photo detail')
	const [shot, setShot] = useState()
	// const [location, setLocation] = useState({})
	
	const {shotId} = useParams();
	const history = useHistory();

    useEffect(() => {
        getShotById(shotId)
        .then((response) => {
            setShot(response)
            console.log(shot)
			// setLocation(response.location)
		})
			}, [])

    return (
<>
        <Card  color='blue' raised>

            <Image src={shot?.pictureUrl} wrapped ui ={false}/>
            <Card.Header as='h4' >{shot?.photoTitle}</Card.Header>
            <Card.Description href={shot?.sourceUrl}>Source: link/website</Card.Description>
            <Card.Description>{shot?.notes}</Card.Description>
            <br/>
            <Card.Content extra>added by {shot?.origSaver}</Card.Content>
            <Checkbox 
                        disabled
                        id={shot?.id}
                        name='shot'
                        label='Shot'
                        // onChange={handleCheckbox}
                        defaultChecked={shot?.done}
                    />

        </Card>

        <br/>
                    {/* Cancel Button */}
                    <Button onClick={() => {
                        history.push(`/`)
                    }}>Cancel</Button>   
                    
                    {/* Delete Button */}
                    <Button color='red' onClick={
                        () => {
                            deleteShot(shot?.id)
                                .then(() => {
                                    history.push("/")
                                })
                        }}>Delete
                    </Button>   

                    {/* Edit Button */}
                    <Button color='blue' onClick={() => {
                        history.push(`/detail/edit/${shot?.id}`)
                    }}>Edit</Button>    
			
     </>       
    )
}








   /* const [shot, setShot] = useState({})

    const handleCheckbox = (event, data) => {
        const newShot = { ...shot }
        newShot[data.name] = data.value
        setShot(newShot)
        updateShot()
}

        {/* //PUT - update card checkbox in database */
    /* const updateShot = () => (
        {
            id: shot.id,
            userId: shot.userId,
            origSaverId: shot.origSaverId, 
            locationId: shot.locationId,
            photoTitle: shot.photoTitle,
            pictureUrl: shot.pictureUrl,
            sourceUrl: shot.sourceUrl, 
            notes: shot.notes, 
            done: shot.done
        }
    )  */