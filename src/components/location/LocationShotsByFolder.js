import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { Card, Header, Dropdown, Modal, Button } from 'semantic-ui-react'
import { PhotoContext } from "../photo/PhotoProvider"
import { LocationContext } from "./LocationProvider"
import { PhotoCard } from "../photo/PhotoCard"
import "../photo/Photo.css"

export const FolderPhotoList = () => {

    const { locations, deleteLocation } = useContext(LocationContext)
    const { shots, getShotsByUserFolder, searchTerms } = useContext(PhotoContext)
    // Since you are no longer ALWAYS displaying all of the shots
    const [ filteredShots, setFiltered ] = useState([])
    const [open, setOpen] = useState(false)
    const history = useHistory();
    const { locationId } = useParams();
    
    // Empty dependency array - useEffect only runs after first render
    // Does the get call with the activeUser from storage and the locationId from Params
    useEffect(() => {
        getShotsByUserFolder(+(localStorage.activeUser), locationId)
    
    }, [])


    // useEffect dependency array with dependencies - will run if dependency changes (state)
    // Filters for searchTerms
    // searchTerms will cause a change
    useEffect(() => {
        if (searchTerms !== "") {
            // If the search field is not blank, display matching shots
            const subset = shots.filter(shot => shot.photoTitle.toLowerCase().includes(searchTerms.toLowerCase()))
            setFiltered(subset)
        } else {
            // If the search field is blank, display all shots matching the activeUser
            setFiltered(shots)
        }
    }, [searchTerms, shots])

    // const Title= (filteredShots) => {
    //     if (locationId === shot.locationId)
    //     return 
    //         shot.location.name}
        

    return (
        <>
                
            <Header as='h2' color='blue' textAlign='center'>
                Your Collection
                <Dropdown
                        icon='ellipsis horizontal'
                        className='icon'
                    >
                        <Dropdown.Menu>
                        <Dropdown.Item
                            onClick={() => history.push(`/locations/edit/${locationId}`)}>
                            Edit Collection Name
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => setOpen(true)}>
                            Delete Collection
                        </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
            </Header>
            <br/>
            <Card.Group itemsPerRow={4} stackable className='cardHolder'>
            <>
                {
                filteredShots.map(shot => {
                    return <PhotoCard key={shot.id} shot={shot} />
                })
                }
            </>
            </Card.Group>



            <Modal
                closeIcon
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                >
                <Header content='Are you sure you want to Delete this Collection Folder?' />
                <Modal.Content>
                    <p>
                    Warning: Deleting this folder will also delete any images saved in this collection. 
                    If you would like to keep the images, click X to cancel now and move the images to another collection folder before deleting the folder.
                    </p>

                    <p>If you would prefer to just edit the folder name, click Edit below.</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' onClick={() => {
                        deleteLocation(locationId)
                            .then(() => {
                                history.push("/locations")
                            })
                            setOpen(false)}
                        }>
                    Delete
                    </Button>
                    <Button 
                        color='blue' 
                        onClick={() => {
                            setOpen(false)
                            history.push(`/locations/edit/${locationId}`)}}>
                    Edit
                    </Button>
                </Modal.Actions>
            </Modal>


        </>
    )
}         
                
                
                
                
                
                
               