import React from "react"
import { Route } from "react-router-dom"
// import { Home } from "./Home"
import { UploadImage } from "./photo/PhotoToCloud"
import { PhotoForm } from "./photo/PhotoForm"
import { PhotoProvider } from "./photo/PhotoProvider"
import { LocationProvider } from "./location/LocationProvider"
// import { PhotoList } from "./photo/PhotoList"
// import { BrowseForm } from "./photo/BrowseForm"
// import { PhotoSearch } from "./photo/PhotoSearch"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            {/* <PhotoProvider>
                <Route exact path="/home">
                    <Home/>
                </Route>
            </PhotoProvider>

            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider> */}
            
            <Route exact path="/add">
                <UploadImage />
            </Route>
 
            <PhotoProvider>
                <LocationProvider>
                    <Route exact path="/add/NewFinish"> 
                        <PhotoForm />
                    </Route> 
                </LocationProvider>
            </PhotoProvider>

            {/* <PhotoProvider>
                <LocationProvider>
                        <Route path="/Photos/edit/:PhotoId(\d+)">
                            <PhotoForm />
                        </Route>
                </LocationProvider>
            </PhotoProvider> */}


        </>
    )
}
