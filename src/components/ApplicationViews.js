import React from "react"
import { Route } from "react-router-dom"
import { UploadImage } from "./photo/PhotoToCloud"
import { PhotoProvider } from "./photo/PhotoProvider"
import { LocationProvider } from "./location/LocationProvider"
import { PhotoList } from "./photo/PhotoList"
import { PhotoDetail } from "./photo/PhotoDetail"
import { PhotoForm } from "./photo/PhotoForm"
import { PhotoSearch } from "./photo/PhotoSearch"
import { LocationList } from "./location/LocationList"
// import { BrowseForm } from "./photo/BrowseForm"

export const ApplicationViews = () => {
    return (
        <>
            {/* Home / Start Screen */}
            <PhotoProvider>
                <Route exact path="/">
                    <PhotoSearch />
                    <PhotoList />
                </Route>
            </PhotoProvider>

            {/* Details of One Shot */}
            <PhotoProvider>
                <Route exact path="/detail/:shotId(\d+)">
                    <PhotoDetail />
                </Route>
            </PhotoProvider>

            {/* Edit of a Shot */}
            <PhotoProvider>
                <LocationProvider>
                        <Route path="/detail/edit/:shotId(\d+)">
                            <PhotoForm />
                        </Route>
                </LocationProvider>
            </PhotoProvider>

            {/* List of Location Collection Folders */}
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            {/* Adding own shot to collection- Part 1 */}
            <Route exact path="/add">
                <UploadImage />
            </Route>

             {/* Adding own shot to collection- Part 2 */}
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
