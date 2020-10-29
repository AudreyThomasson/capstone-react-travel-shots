import React, { useState, useContext } from 'react'
import { Form, Grid, Header, Segment, Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { LocationContext } from './LocationProvider'
import "../photo/extraButton.css"


export const LocationAddForm = () => {
    const { addLocation } = useContext(LocationContext)

    const [location, setLocation] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    
    const history = useHistory();


    const handleFieldChange = event => {
        const newLocation = { ...location }
        newLocation[event.target.name] = event.target.value;
        setLocation(newLocation)
    } 



    const constructNewLocation = () => {
        if (location.name === "" ) {
            alert("Please complete field or cancel")
        } else {
            setIsLoading(true);
           
            //POST - add
            addLocation({
                userId:+(localStorage.activeUser),
                name: location.name
            })
            .then(() => history.push(`/locations`))
            
        }
        
    }


    return (
        <>
            <Grid style={{ height: '100vh' }} verticalAlign='top' centered>
                <Grid.Column style={{ maxWidth: 455 }}>
                    <br/>
                    <Header as='h2' color='blue' textAlign='center'>
                        {'Enter Name for New Location Folder'}  
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
                            defaultValue={""}
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
                                    history.push(`/locations`)
                                }}>
                                Cancel
                            </Button>
                        
                            {/* Save the new folder button */}
                            <Button
                                color='blue'
                                // disabled={isLoading} 
                                variant="custom"
                                className="newShotButton"
                                onClick={event => {
                                    event.preventDefault() // Prevent browser from submitting the form
                                    constructNewLocation()
                                }}>
                                {'Save New Folder'}
                            </Button>
                        </Form.Field>


                </Grid.Column>
            </Grid>
 
            

        </>
    )
}

