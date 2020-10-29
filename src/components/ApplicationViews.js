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
import { LocationAddForm } from "./location/LocationAddForm"
import { FolderPhotoList } from "./location/LocationShotsByFolder"
import { LocationEditForm } from "./location/LocationEditForm"
// import { BrowseForm } from "./photo/BrowseForm"

export const ApplicationViews = () => {
    return (
        <>
            {/* Home / Start Screen with All Shots of user & Search field */}
            <PhotoProvider>
                <Route exact path="/home">
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

            {/* Adding a Location Folder */}
            <LocationProvider>
                <Route exact path="/locations/add">
                    <LocationAddForm />
                </Route>
            </LocationProvider>

            {/* Photos in a single Collection Folder with Search */}
            <PhotoProvider>
                <LocationProvider>
                    <Route exact path="/locations/:locationId(\d+)">
                        <PhotoSearch />
                        <FolderPhotoList />
                    </Route>
                </LocationProvider>
            </PhotoProvider>

             {/* Editing Name of a Location Folder */}
             <LocationProvider>
                <Route exact path="/locations/edit/:locationId(\d+)">
                    <LocationEditForm />
                </Route>
            </LocationProvider>

            {/* Adding own shot- Part 1 of 2 */}
            <Route exact path="/add">
                <UploadImage />
            </Route>

             {/* Adding own shot- Part 2 of 2*/}
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
