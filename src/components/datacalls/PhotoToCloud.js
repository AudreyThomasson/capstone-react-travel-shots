import React, { useState } from 'react';
import { Form, Input, Button, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

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
            <Form>
                <h4 className="imageText">Upload Inspiration Image</h4>
                <Form.Field required>
                <label>Upload a JPEG or PNG file from your computer</label>
                {/* <Input placeholder='upload from your computer' /> */}
                    <input 
                    className="imageInput"
                    type="file"
                    name="file"
                    placeholder="Upload an Image"
                    onChange={uploadTravelImage}
                    />
                </Form.Field>
            </Form>
            

            {imageLoading ? (
                <h6 className="loadingImage">Loading...</h6>
            ): <Image src={(sessionStorage.travelImage)} className="travelImage" style={{height: "350px" }} />}

            <Link to={(`/add/NewFinish`)}>
                <Button variant="custom" className="continueTravelButton">Continue</Button>
            </Link>
   </>
    )
}