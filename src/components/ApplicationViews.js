import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { PhotoProvider } from "./photo/PhotoProvider"
import { LocationProvider } from "./location/LocationProvider"

// import { PhotoList } from "./photo/PhotoList"

import { AddForm } from "./photo/PhotoForm"
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
            </LocationProvider>
            
            {/* <PhotoProvider>
                <LocationProvider>
                    <Route exact path="/add">
                        <AddForm />
                    </Route>
                </LocationProvider>
            </PhotoProvider>

            <PhotoProvider>
                <LocationProvider>
                        <Route path="/Photos/edit/:PhotoId(\d+)">
                            <PhotoForm />
                        </Route>
                </LocationProvider>
            </PhotoProvider> */} */}


        </>
    )
}
