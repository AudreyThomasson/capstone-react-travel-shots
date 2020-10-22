import React, { useState, useContext } from 'react'
import { Form, Grid, Header, Segment, Button, Image, TextArea } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { PhotoContext } from './PhotoProvider';

export const PhotoForm = props => {
    const {addShot} = useContext(PhotoContext)


    // const [image, setImage] = useState([]);
    // const [loading, setLoading] = useState(false)
    const [shot, setShot] = useState({userId:+(localStorage.activeUser), origSaverId:+(localStorage.activeUser), locationId: 0, photoTitle: "", pictureUrl: localStorage.travelImage, sourceUrl: "", notes: "", done: false});
    const [isLoading, setIsLoading] = useState(false);


    const handleFieldChange = event => {
        const newShot = {...shot}
        newShot[event.target.controlId] = event.target.value;
        setShot(newShot)
    }; 
            

    const constructNewShot = event => {
        event.preventDefault();
        if (shot.photoTitle === "" || shot.sourceUrl === "" || shot.notes === "") {
            alert("Please complete all fields")
        } else {
            setIsLoading(true);
            addShot("shots", shot)
            .then(() => props.history.push("/home"))
        }
        
    }



    return (
        <>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
                <Grid.Column style={{ maxWidth: 455 }}>
                    <br/>
                    <Header as='h2' color='blue' textAlign='center'>
                        Enter Information to Save
                    </Header>
                    
                    
                    <Form size='large'>
            
                        <Segment stacked>
                        <br/>
                        <div className='defaultImage'> 
                            <Image src={ localStorage.travelImage } size='medium' centered />
                        </div>                   
                        <br/>
                        <Form.Input
                            fluid
                            label='Photo Title'
                            placeholder='Photo Title'
                            controlId='photoTitle'
                            onChange={handleFieldChange}
                            />
                        <Form.Input
                            fluid
                            label='Source Website/Url'
                            placeholder='Source Website/Url'
                            controlId='sourceUrl'
                            onChange={handleFieldChange}
                        />
                        <Form.Field
                            control={TextArea}
                            label='Notes'
                            placeholder='Save some notes for this idea...'
                            controlId='notes'
                            onChange={handleFieldChange}
                        />
                        
                        </Segment>
                    </Form>
                    
                    <br/>
                    <Link to={(`/home`)}>
                        <Button variant="custom" className="cancelButton">Cancel</Button>
                    </Link>
                    
                    <Link to={(`/home`)}>
                        <Button 
                            variant="custom"
                            className="newShotButton"
                            onClick={constructNewShot}
                            type="submit">
                            Save
                        </Button>
                    </Link>


                </Grid.Column>
            </Grid>
 
            

        </>
    )
}


