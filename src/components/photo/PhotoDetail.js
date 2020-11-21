import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { Card, Image, Button, Grid, Header, Form, CardContent } from 'semantic-ui-react'
import { PhotoContext } from "./PhotoProvider"
import "./extraButton.css"


export const PhotoDetail = () => {
    const { getShotById, deleteShot } = useContext(PhotoContext)
    const [shot, setShot] = useState()
	const {shotId} = useParams();
	const history = useHistory();

    useEffect(() => {
        getShotById(shotId)
        .then((response) => {
            setShot(response)
		})
            }, [])
            


    return (
        <>
            <Grid style={{ height: '100vh' }} verticalAlign='top' centered>
                <Grid.Column style={{ maxWidth: 500 }}>
                    <br/>
                    <Header as='h2' color='blue' textAlign='center'>{'Shot Details'}</Header>
                    
                    
                    <Card  color='blue' raised centered fluid>

                        <Image src={shot?.pictureUrl} wrapped ui={false}/>
                        <CardContent>
                            <Card.Header as='h3' >{shot?.photoTitle}</Card.Header>
                            <Card.Description>Collection:  {shot?.location.name}</Card.Description>
                            <Card.Description href={shot?.sourceUrl}>Source: link/website</Card.Description>
                            <Card.Description>Notes:  {shot?.notes}</Card.Description>
                        </CardContent>
                        <Card.Content extra className='extraBox'>
                            added by: {shot?.origSaver}                        
                        </Card.Content>
                    </Card>

                    
                        <Form.Field className= 'groupButtons'>
                                {/* Cancel Button */}
                                <Button onClick={() => {
                                    history.push(`/home`)
                                }}>Cancel</Button>   
                                
                                {/* Delete Button */}
                                <Button color='red' onClick={
                                    () => {
                                        deleteShot(shot?.id)
                                            .then(() => {
                                                history.push('/home')
                                            })
                                    }}>Delete
                                </Button>   

                                {/* Edit Button */}
                                <Button color='blue' onClick={() => {
                                    history.push(`/detail/edit/${shot?.id}`)
                                }}>Edit</Button>  
                        </Form.Field> 
                        
                </Grid.Column> 
            </Grid>
			
        </>       
    )
}