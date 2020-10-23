// import React, { useContext, useEffect, useState } from "react"
// import { useParams, useHistory } from "react-router-dom"
// import { PhotoContext } from "./PhotoProvider"


// export const PhotoDetail = () => {
//     const { getShotById, deleteShot } = useContext(PhotoContext)
	
// 	const [photo, setPhoto] = useState()
// 	// const [location, setLocation] = useState({})
// 	// const [customer, setCustomer] = useState({})
	
// 	const {photoId} = useParams();
// 	const history = useHistory();

//     useEffect(() => {
// 		console.log("useEffect", photoId)
//         getShotById(photoId)
//         .then((response) => {
// 			setPhoto(response)
// 			// setLocation(response.location)
// 			// setCustomer(response.customer)
// 		})
// 			}, [])

//     return (
//         <section className="photo">
//             <h3 className="photo__name">{photo?.name}</h3>
//             <div className="photo__breed">{photo?.breed}</div>
// 			<div className="photo__location">Location: {photo?.location.name}</div>
// 			<div className="photo__owner">Customer: {photo?.customer.name}</div>

//             <button onClick={
//                 () => {
//                     deleteShot(photo.id)
//                         .then(() => {
//                             history.push("/")
//                         })
//                 }}>Delete
//             </button>   

           
//             <button onClick={() => {
//                 history.push(`/edit/${photo?.id}`)
//             }}>Edit</button>    
			
            
//         </section>
//     )
// }

// export const PhotoCard = ({shot}) => (
//     <>
//         <Card  color='blue' raised>

//             <Image as={Link} to='/home/detail/${shot.id}' src={shot.pictureUrl} wrapped ui ={false}/>
//             <Card.Header as='h4' >{shot.photoTitle}</Card.Header>
//             <Card.Description href={shot.sourceUrl}>Source: link/website</Card.Description>
//             <Card.Description>{shot.notes}</Card.Description>
//             <br/>
//             <Checkbox 
//                         disabled
//                         id={shot?.id}
//                         name='shot'
//                         label='Shot'
//                         // onChange={handleCheckbox}
//                         defaultChecked={shot?.done}
//                     />
//         </Card>
//     </>
// )





// <Card.Content extra>added by {shot.origSaver}</Card.Content>


//    {/* const [shot, setShot] = useState({})

//     const handleCheckbox = (event, data) => {
//         const newShot = { ...shot }
//         newShot[data.name] = data.value
//         setShot(newShot)
//         updateShot()
// }

//         {/* //PUT - update card checkbox in database */}
//     {/* const updateShot = () => (
//         {
//             id: shot.id,
//             userId: shot.userId,
//             origSaverId: shot.origSaverId, 
//             locationId: shot.locationId,
//             photoTitle: shot.photoTitle,
//             pictureUrl: shot.pictureUrl,
//             sourceUrl: shot.sourceUrl, 
//             notes: shot.notes, 
//             done: shot.done
//         }
//     )  */}