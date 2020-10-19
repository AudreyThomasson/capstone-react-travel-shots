import React, { Component } from 'react'
import { Input, Menu, Dropdown } from 'semantic-ui-react'
import { Link } from "react-router-dom"
// import { LocationContext } from "../location/LocationProvider"

export const NavBar = (props) => {
    // const { locations, getLocations } = useContext(LocationContext)

    return (
        <Menu secondary>
          
            <Menu.Item 
                name='Home'
                as={Link} to='/'
            />

            <Menu vertical>
                <Dropdown item text='View by Location Folder' value="0">
                    <Dropdown.Menu>
                        {/* <Dropdown.Item
                            options={locations.map(l => {
                                return {
                                    key: l.id,
                                    name: l.name,
                                    value: l.id
                                }
                                })} */}
                        />

                        <Dropdown.Divider />
                        <Dropdown.Header content='Add a Location Folder' />
                            <Input name='addLocation' />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>

            <Menu.Item
                name='Add Photo'
                as={Link} to='/add'
            />
            <Menu.Item
            name='Browse for Inspiration'
                as={Link} to='/browse'
            />
            <Menu.Menu position='right'>
            <Menu.Item>
                <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            </Menu.Menu>
      </Menu>
    )
}
