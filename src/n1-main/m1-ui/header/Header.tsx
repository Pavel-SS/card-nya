
import React from 'react'
import { NavLink } from 'react-router-dom'


export const Header = () => {
    return (
        <header style={{display:'flex', justifyContent: 'space-between', padding:'0 20px'}}>
            <NavLink to={'/registration'} 
                // className={({isActive})=> isActive ? 'active' + ' ' + s.link : s.link}
            >
                registration
            </NavLink>
            <NavLink to={'./login'} 
                // className={({isActive})=> isActive ? 'active' + ' ' + s.link : s.link}
                >
                login
            </NavLink>
            <NavLink to={'/insert_password'} 
                // className={({isActive})=> isActive ? 'active' + ' ' + s.link : s.link}
            >
                insert password
            </NavLink>
            <NavLink to={'/recover_password'} 
                // className={({isActive})=> isActive ? 'active' + ' ' + s.link : s.link}
            >
                recover password
            </NavLink>
             <NavLink to={'/profile'} 
                // className={({isActive})=> isActive ? 'active' + ' ' + s.link : s.link}
            >
                profile
            </NavLink>
        </header>
    )
}

