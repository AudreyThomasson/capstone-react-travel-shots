import React, { useState, useContext, useEffect } from 'react'
import { Form, Grid, Header, Segment, Button, Image, Dropdown, Input } from 'semantic-ui-react'
import { useHistory, useParams } from 'react-router-dom'
import { PhotoContext } from './PhotoProvider'
import { LocationContext } from '../location/LocationProvider'
import "./extraButton.css"


export const PhotoForm = () => {
    const { addShot , getShotById, updateShot } = useContext(PhotoContext)
    const { locations, getLocations, addLocation } = useContext(LocationContext)

    const [shot, setShot] = useState({})
    const [location, setLocation] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    
    const { shotId } = useParams();
    const history = useHistory();


    const handleFieldChange = event => {
        const newShot = { ...shot }
        newShot[event.target.name] = event.target.value;
        setShot(newShot)
    } 

    const handleDropdown = (event, data)=> {
        const newShot = { ...shot }
        newShot[data.name] = data.value
        setShot(newShot)
    }

    const handleAddition = (event, data) => {
        const LocationToSave = {
            name: data.value,
            userId: localStorage.activeUser ? +(localStorage.activeUser) : shot.userId
        }
        addLocation(LocationToSave).then(() => {
            getLocations().then(locations => {
                setLocation(locations)
            })
        })
    }

    // if(addLocation.value.length !== 0 && location.value === "0"){
    //     let newLocationId = locations.length
    //     newShot[data.name] = newLocationId++
    // }

    // Get location folder names. If shotId is in the URL, getShotById
    useEffect(() => {
        getLocations().then(()=> {
            if (shotId){
                getShotById(shotId)
                .then(shot => {
                    setShot(shot)
                    setIsLoading(false)
                })
            } else {
                setIsLoading(false)
            }
        })
    }, [])
        

    const constructNewShot = () => {
        if (shot.photoTitle === "" || shot.sourceUrl === "" || shot.notes === "" || +(shot.locationId) === 0 ) {
            alert("Please complete all fields")
        } else {
            setIsLoading(true);
            if (shotId){
                //PUT - update
                updateShot({
                    id: shot.id,
                    userId: shot.userId,
                    origSaver: shot.origSaver, 
                    locationId: shot.locationId,
                    photoTitle: shot.photoTitle,
                    pictureUrl: shot.pictureUrl,
                    sourceUrl: shot.sourceUrl, 
                    notes: shot.notes, 
                    done: false
                })
                .then(() => history.push(`/detail/${shot.id}`))
            }else {
                //POST - add
                addShot({
                    userId:+(localStorage.activeUser),
                    origSaver:localStorage.username, 
                    locationId: shot.locationId,
                    photoTitle: shot.photoTitle,
                    pictureUrl: localStorage.travelImage,
                    sourceUrl: shot.sourceUrl, 
                    notes: shot.notes, 
                    done: false
                })
                .then(() => history.push(`/`))
            }
        }
        
    }


    return (
        <>
            <Grid style={{ height: '100vh' }} verticalAlign='top' centered>
                <Grid.Column style={{ maxWidth: 455 }}>
                    <br/>
                    <Header as='h2' color='blue' textAlign='center'>
                        {shotId ? 'Edit Information' : 'Enter Information to Save'}  
                    </Header>
                    
                    
                    <Form size='large'>
            
                        <Segment stacked>
                        <br/>
                        <div className='defaultImage'> 
                            <Image src={ localStorage.travelImage ? localStorage.travelImage : shot.pictureUrl } size='medium' centered />
                        </div>                   
                        <br/>
                        <Form.Input
                            // fluid
                            label='Photo Title:'
                            placeholder='Photo Title'
                            name='photoTitle'
                            onChange={(event) => handleFieldChange(event)}
                            required
                            autoFocus
                            defaultValue={shot?.photoTitle}
                            />

                        <Form.Dropdown
                            allowAdditions
                            additionPosition= 'top'
                            additionLabel= 'add a Location Folder  '
                            onAddItem={handleAddition}
                            label='Location Folders'
                            placeholder={shot?.location?.name}
                            selection
                            search
                            required
                            options={locations.map(location => {
                                return {
                                    key: location.id,
                                    text: location.name,
                                    value: location.id
                                }
                            })}
                            defaultValue={shot?.locationId}
                            onChange={handleDropdown}
                            name= 'locationId'
                        />


                        <Form.Input
                            label='Source Website/Url'
                            placeholder='Source Website/Url'
                            name='sourceUrl'
                            onChange={(event) => handleFieldChange(event)}
                            required
                            autoFocus
                            defaultValue={shot?.sourceUrl}
                        />
                        <Form.TextArea
                            label='Notes'
                            placeholder='Save some notes for this idea...'
                            name='notes'
                            onChange={(event) => handleFieldChange(event)}
                            required
                            autoFocus
                            defaultValue={shot?.notes}
                        />
                        
                        </Segment>
                    </Form>
                    
                    <br/>
                        <Form.Field className= 'groupButtons'>
                            {/* Cancel Add & Return to Home Screen (remove image from localStorage) */}
                            <Button 
                                variant="custom" 
                                className="cancelButton"
                                onClick={event => {
                                    localStorage.removeItem("travelImage")
                                    history.push(`/`)
                                }}>
                                Cancel
                            </Button>
                        
                            {/* If it is an existing shot, Save Updates or if it is new Save then Save Shot & 
                            Remove from localStorage bc it will now be in the database. */}
                            <Button
                                color='blue'
                                disabled={isLoading} 
                                variant="custom"
                                className="newShotButton"
                                onClick={event => {
                                    event.preventDefault() // Prevent browser from submitting the form
                                    constructNewShot()
                                    localStorage.removeItem("travelImage")
                                }}>
                                {shotId ? 'Save Updates' : 'Save Shot'}
                            </Button>
                        </Form.Field>


                </Grid.Column>
            </Grid>
 
            

        </>
    )
}

