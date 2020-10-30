import React, { useState, useContext, useEffect } from 'react'
import { Form, Grid, Header, Segment, Button } from 'semantic-ui-react'
import { useHistory, useParams } from 'react-router-dom'
import { LocationContext } from './LocationProvider'
import "../photo/extraButton.css"


export const LocationEditForm = () => {
    const { getLocationById, updateLocation } = useContext(LocationContext)

    const [location, setLocation] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    
    const { locationId } = useParams();
    const history = useHistory();



    const handleFieldChange = event => {
        const newLocation = { ...location }
        newLocation[event.target.name] = event.target.value;
        setLocation(newLocation)
    } 

    useEffect(() => {        
        getLocationById(locationId)
                .then(location => {
                    setLocation(location)
                    setIsLoading(false)
        })
    }, [])

    const constructNewLocation = () => {
        if (location.name === "" ) {
            alert("Please complete field or cancel")
        } else {
            setIsLoading(true);
           
            //PUT - update
            updateLocation({
                id:location.id,
                userId:+(localStorage.activeUser),
                name: location.name
            })
            .then(() => history.push(`/locations/${location.id}`))
            
        }
        
    }


    return (
        <>
            <Grid style={{ height: '100vh' }} verticalAlign='top' centered>
                <Grid.Column style={{ maxWidth: 455 }}>
                    <br/>
                    <Header as='h2' color='blue' textAlign='center'>
                        {'Edit Name of Location Folder'}  
                    </Header>
                    
                    
                    <Form size='large'>
            
                        <Segment stacked>
                        <br/>
                        <Form.Input
                            placeholder='Location Folder'
                            name='name'
                            onChange={(event) => handleFieldChange(event)}
                            required
                            autoFocus
                            defaultValue={location?.name}
                            />
                        
                        </Segment>
                    </Form>
                    
                    <br/>
                        <Form.Field className= 'groupButtons'>
                            {/* Cancel Add & Return to listing of Location Folders */}
                            <Button 
                                variant="custom" 
                                className="cancelButton"
                                onClick={event => {
                                    history.push(`/locations/${location?.id}`)
                                }}>
                                Cancel
                            </Button>
                        
                            {/* Save the edited name button */}
                            <Button
                                color='blue'
                                // disabled={isLoading} 
                                variant="custom"
                                className="newShotButton"
                                onClick={event => {
                                    event.preventDefault() // Prevent browser from submitting the form
                                    constructNewLocation()
                                }}>
                                {'Save Name Edit'}
                            </Button>
                        </Form.Field>


                </Grid.Column>
            </Grid>
 
            

        </>
    )
}

