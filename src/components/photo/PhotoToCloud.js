import React, { useState } from 'react'
import { Form, Grid, Header, Segment, Button, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import BlankImage from '../../images/BlankImage.png'

// This uploads the image to Cloudinary and places the Cloudinary url into
// sessionStorage to be used by the next part of the form. Then it calls the second part of the Add Photo Form
export const UploadImage = props => {
    
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
        localStorage.setItem("travelImage", travelImage)

       
        setImageLoading(false)
    }
 

    return (
        <>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
                <Grid.Column style={{ maxWidth: 450 }}>
                <br/>
                <Header as='h2' color='blue' textAlign='center'>
                    Upload Inspiration Image
                </Header>
                <Form size='large'>
        
                    <Segment stacked>
                    <br/>
                    <div className='defaultImage'> 
                        <Image src={ localStorage.travelImage ? localStorage.travelImage : BlankImage } size='medium' centered />
                    </div>
                    
                    {imageLoading ? (
                        <h6 className="loadingImage">Loading...</h6>
                            ): <></>}
                    

                    <br/>
                    <label htmlFor="embedpollfileinput" className="ui huge blue button">
                        <i className="ui upload icon"></i> 
                        Upload image
                        </label>
                        <input hidden type="file" onChange={uploadTravelImage} className="inputfile" id="embedpollfileinput" />

                </Segment>
                </Form>
                 
                <br/>
                <Link to={(`/`)}>
                    <Button 
                        variant="custom" 
                        className="cancelButton"
                        onClick={event => {
                            localStorage.removeItem("travelImage")
                        }}>
                        Cancel</Button>
                </Link>

                {localStorage.travelImage ? (
                    <Link to={(`/add/NewFinish`)}>
                        <Button variant="custom" className="continueTravelButton">Continue</Button>
                    </Link>)
                    : (<Button disabled variant="custom" className="continueTravelButton">Continue</Button>)
                }

                </Grid.Column>
            </Grid>

        </>
    )
}