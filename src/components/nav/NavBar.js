import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import MtOutlineLogo from '../../images/MtOutlineLogo.png'


const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    marginLeft: '3.5em',
    marginRight: '4em',
    marginTop: '2em',
  }

  
export const NavBar = (props) => {
    
    const clearStorage = () => {
        localStorage.clear()
    }

    return (

        <Menu
            borderless
            style={menuStyle}
        >
                <Menu.Item>
                    <img src={MtOutlineLogo} />
                </Menu.Item>
                
                <Menu.Item 
                    name='Home'
                    as={Link} to='/home'
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

                    <Menu.Item
                    name='Log Out'
                    as={Link} to='/'
                    onClick={clearStorage}
                    />
                </Menu.Menu>
        </Menu>
                                  
    )
}
