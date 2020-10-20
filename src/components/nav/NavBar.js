import React from 'react'
import { Input, Menu, Dropdown } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import { LocationContext } from "../location/LocationProvider"

const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    marginLeft: '6em',
    marginRight: '4em',
    marginTop: '3em',
    // transition: 'box-shadow 0.5s ease, padding 0.5s ease',
  }


  
export const NavBar = (props) => {
  
    const { locations, getLocations } = useContext(LocationContext)

    return (

        <Menu
            borderless
            style={menuStyle}
        >
                <Menu.Item 
                    name='Home'
                    as={Link} to='/'
                />
                    <Dropdown text='View by Trip Name' pointing className='link item' value="0">
                        <Dropdown.Menu>
                            <Dropdown.Item
                                options={locations.map(l => {
                                    return {
                                        key: l.id,
                                        name: l.name,
                                        value: l.id
                                    }
                                    })}
                            />
                        </Dropdown.Menu>
                    </Dropdown>

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
                    <Input icon='search' placeholder='Search by Photo Title...' />
                </Menu.Item>
                </Menu.Menu>
        </Menu>
                                  
    )
}
