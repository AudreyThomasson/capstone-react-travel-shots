import React from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom"

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

    return (

        <Menu
            borderless
            style={menuStyle}
        >
                <Menu.Item 
                    name='Home'
                    as={Link} to='/'
                />

                <Menu.Item
                    name='Add Photo'
                    as={Link} to='/add'
                />

                <Menu.Menu position='right'>
                    <Menu.Item
                    name='Browse for Inspiration'
                        as={Link} to='/browse'
                    />
                </Menu.Menu>
        </Menu>
                                  
    )
}
