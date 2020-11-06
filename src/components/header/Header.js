import React from "react"
import { useHistory } from "react-router-dom"
import { Button, Image, Header } from 'semantic-ui-react'
import CapstoneLogo from '../../images/CapstoneLogo.png'
import "../header/Header.css"


export const HeaderWelcome = () => {

    const username = localStorage.getItem("username")
    const history = useHistory()

    const clearStorage = () => {
        localStorage.clear()
        history.push("/")
    }

    return (
    <>
        <div className='container'>
        <Image src={CapstoneLogo} size='small' wrapped className='item-a' />
        <Header as='h1' className='item-b'>TravelShots</Header>
        <div className='item-c'/>
        <Button  className='item-d' basic color='blue' size='tiny' onClick={clearStorage}>
            Log Out
        </Button>
        </div>
    </>  
    )
}
