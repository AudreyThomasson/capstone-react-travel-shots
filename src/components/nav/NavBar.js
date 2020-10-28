import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom"

const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    marginLeft: '6em',
    marginRight: '4em',
    marginTop: '3em',
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
                    name='View by Collection'
                    as={Link} to='/locations'
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
