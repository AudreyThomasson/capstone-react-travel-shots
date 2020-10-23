import React from "react"
import { Route } from "react-router-dom"
// import { Home } from "./Home"
import { UploadImage } from "./photo/PhotoToCloud"
import { PhotoForm } from "./photo/PhotoForm"
import { PhotoProvider } from "./photo/PhotoProvider"
import { LocationProvider } from "./location/LocationProvider"
import { PhotoList } from "./photo/PhotoList"
import { PhotoDetail } from "./photo/PhotoDetail"
// import { BrowseForm } from "./photo/BrowseForm"
// import { PhotoSearch } from "./photo/PhotoSearch"

export const ApplicationViews = () => {
    return (
        <>
            <PhotoProvider>
                <Route exact path="/">
                    <PhotoList />
                </Route>
            </PhotoProvider>

            {/* Details of One Shot */}
            <PhotoProvider>
                <Route exact path="/detail/:shotId(\d+)">
                    <PhotoDetail />
                </Route>
            </PhotoProvider>


            <PhotoProvider>
                <LocationProvider>
                        <Route path="/details/edit/:shotId(\d+)">
                            <PhotoForm />
                        </Route>
                </LocationProvider>
            </PhotoProvider>

            {/* <LocationProvider>
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



        </>
    )
}
