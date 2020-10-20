import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import NavBar from '../nav/Navbar'


export const UploadImage  = props => {
    
    
    const [loading, setLoading] = useState(false)
    const [imageLoading, setImageLoading] = useState(false)

   
    const uploadTravelImage = async e => {
        const files= e.target.files
        setImageLoading(true)
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'recipes')
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/kingamandarae/image/upload', 
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
       
        <div className="imageContainer">
       <Row className="imageUpload">
           <Col sm={4} className="OCRCol">
           <h4 className="OCRText">Upload Image to Return as Text</h4>
           <Form>
           <Form.Group>
           <Form.File 
           className="OCRInput"
           type="file"
           name="file"
           placeholder="Upload an Image"
           onChange={uploadImage}
           />
           </Form.Group>
           </Form>
           {/* </Col>
           <Col className="returnCol"> */}
           {loading ? (
               <h6 className="loadingOCR">Loading...</h6>
           ): <p className="ocrReturnText">{sessionStorage.text}</p>}
           </Col>
            {/* </Row>
            <Row className="imageUpload"> */}
            <Col sm={4} className="imageCol">
           <h4 className="imageText">Upload Recipe Image</h4>
           <input 
           className="imageInput"
           type="file"
           name="file"
           placeholder="Upload an Image"
           onChange={uploadTravelImage}
           />
           {/* </Col>
           <Col> */}
           {imageLoading ? (
               <h6 className="loadingImage">Loading...</h6>
           ): <Image src={(sessionStorage.recipeImage)} className="recipeImage" style={{ width: "350px", height: "350px" }} />}
           </Col>
           <Col>
           <Link to={(`/recipes/NewFinish`)}>
                <Button variant="custom" className="continueRecipeButton">Continue</Button>
            </Link>
           </Col>
           </Row>    
   </div>
   </>
    )
}