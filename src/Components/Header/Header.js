import React from 'react'

// Stylezheet
import './Header.css'

const Header = () => {
    return(
        <nav className="header">
            <div>
            <img className="ball2" src="https://cdn2.iconfinder.com/data/icons/gaming-color-icons/104/22-gaming-pokemon-pokeball-512.png" />
            </div>
            <div className="title">
            <img className="logo" src = "http://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png"/>
            <h1>Team - Builder</h1> 
            </div>
            <div>
                <img className="ball" src="https://cdn2.iconfinder.com/data/icons/gaming-color-icons/104/22-gaming-pokemon-pokeball-512.png" />
            </div>
        </nav>
    )
}

export default Header