import React, { useState } from 'react'
import { Form, Grid, Header, Segment, Message, Button, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { BlankImage } from '.../public/images/BlankImage.png'

// This uploads the image to Cloudinary and places the Cloudinary url into
// sessionStorage to be used by the next part of the form. Then it calls the second part of the Add Photo Form
export const UploadImage  = props => {
    
    
    const [loading, setLoading] = useState(false)
    const [imageLoading, setImageLoading] = useState(false)

   
    const uploadTravelImage = async e => {
        const files= e.target.files
        setImageLoading(true)
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'darwin')
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/audreyrt/image/upload', 
            {
                method: "POST",
                body: data
            }
        )
        const file = await res.json()
        let travelImage= file.secure_url
        console.log(file.secure_url)
        sessionStorage.setItem("travelImage", travelImage)

       
        setImageLoading(false)
    }

    return (
        <>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Upload Inspiration Image
                </Header>
                <Form size='large'>
                    <Segment stacked>
                    
                    <Image src={ BlankImage } size='medium' disabled />
                    

                    <label for="embedpollfileinput" class="ui huge teal button">
                        <i class="ui upload icon"></i> 
                        Upload image
                        </label>
                        <input hidden type="file" onChange={uploadTravelImage} class="inputfile" id="embedpollfileinput" />

                 
                    </Segment>
                </Form>
                <Message>
                    <a href='#'>Cancel</a>
                </Message>
                </Grid.Column>
            </Grid>




{/* 
            <Form>
                <h4 className="imageText">Upload Inspiration Image</h4>
                
                <Form.Field required>
                    {/* <Button animated='fade'>
                        <Button.Content visible>
                            <Button content='Upload an Image' icon='upload' labelPosition='left' />
                        </Button.Content>
                        <Button.Content hidden>Select a JPEG or PNG file</Button.Content>
                    </Button> */}
                    {/* <input 
                        className="imageInput"
                        type="file"
                        name="file"
                        placeholder="Upload an Image"
                        onChange={uploadTravelImage}
                    />
                </Form.Field>
            </Form>  */} 
            

            {imageLoading ? (
                <h6 className="loadingImage">Loading...</h6>
            ): <Image src={(sessionStorage.travelImage)} className="travelImage" style={{height: "350px" }} />}

            <Link to={(`/add/NewFinish`)}>
                <Button variant="custom" className="continueTravelButton">Continue</Button>
            </Link>
   </>
    )
}