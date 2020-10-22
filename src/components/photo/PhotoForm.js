import React, { useState, useContext, useEffect } from 'react'
import { Form, Grid, Header, Segment, Button, Image, Dropdown } from 'semantic-ui-react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { PhotoContext } from './PhotoProvider'
import { LocationContext } from '../location/LocationProvider'

export const PhotoForm = () => {
    const { addShot , getShotById, updateShot } = useContext(PhotoContext)
    const { locations, getLocations } = useContext(LocationContext)

    // ({userId:+(localStorage.activeUser), origSaverId:+(localStorage.activeUser), locationId: 0, photoTitle: "", pictureUrl: localStorage.travelImage, sourceUrl: "", notes: "", done: false});
    const [shot, setShot] = useState({})
    const [location, setLocation] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    
    const { shotId } = useParams();
    const history = useHistory();

    // const locationOptions = (locations) => {
    //     const allLocations = locations.map(l => (
    //         key={l.id},
    //         value={l.id},
    //         name={l.name}
    //         )
    //     )}
    //     return allLocations
    // }

    const handleFieldChange = event => {
        const newShot = { ...shot }
        newShot[event.target.name] = event.target.value;
        setShot(newShot)
    } 

    const handleDropdown = (event, data)=> {
        console.log(data)
        const newShot = { ...shot }
        newShot[data.name] = data.value
        setShot(newShot)
    }

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
                    origSaverId: shot.origSaverId, 
                    locationId: shot.locationId,
                    photoTitle: shot.photoTitle,
                    pictureUrl: shot.pictureUrl,
                    sourceUrl: shot.sourceUrl, 
                    notes: shot.notes, 
                    done: false
                })
                .then(() => history.push(`/home/detail/${shot.id}`))
            }else {
                //POST - add
                addShot({
                    userId:+(localStorage.activeUser),
                    origSaverId:+(localStorage.activeUser), 
                    locationId: shot.locationId,
                    photoTitle: shot.photoTitle,
                    pictureUrl: localStorage.travelImage,
                    sourceUrl: shot.sourceUrl, 
                    notes: shot.notes, 
                    done: false
                })
                .then(() => history.push(`/home/detail/${shot.id}`))
            }
        }
        
    }



    return (
        <>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
                <Grid.Column style={{ maxWidth: 455 }}>
                    <br/>
                    <Header as='h2' color='blue' textAlign='center'>
                        {shotId ? 'Edit Information' : 'Enter Information to Save'}  
                    </Header>
                    
                    
                    <Form size='large'>
            
                        <Segment stacked>
                        <br/>
                        <div className='defaultImage'> 
                            <Image src={ localStorage.travelImage } size='medium' centered />
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
                        <Dropdown
                            fluid
                            placeholder='Select a Location Folder'
                            selection
                            name='location'
                            label='Locations'
                            options={locations.name}
                            defaultValue={shot?.locationId}
                            onChange={handleDropdown}
                            />
                        <Form.Input
                            // fluid
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
                    <Link to={(`/home`)}>
                        <Button 
                            variant="custom" 
                            className="cancelButton"
                            onClick={event => {
                                localStorage.removeItem("travelImage")
                            }}>
                            Cancel
                        </Button>
                    </Link>
                    
                    <Link to={(`/home/detail/${shot.id}`)}>
                        <Button
                            disabled={isLoading} 
                            variant="custom"
                            className="newShotButton"
                            onClick={event => {
                                event.preventDefault() // Prevent browser from submitting the form
                                constructNewShot()
                                localStorage.removeItem("travelImage")
                            }}>
                            {shotId ? 'Save Updates' : 'Add Shot'}
                        </Button>
                    </Link>


                </Grid.Column>
            </Grid>
 
            

        </>
    )
}
