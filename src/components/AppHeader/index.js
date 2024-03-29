import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './AppHeader.css'

const AppHeader = (props) => {
  return (
    <header className='app-header'>
      <div className='app-title-wrapper'>
        <div className='app-left-nav'>
          <img src={logo} className='app-logo' alt='logo' />
          <div className='app-title-text'>
            <h1 className='app-title'>Dashboard</h1>
            <p className='app-intro'>Manage enquiries, shared albums and more.</p>
          </div>
        </div>
      </div>
      <div className='app-routes'>
        <Link to='/'>Home</Link>
        <Link to='/contacts'>Contacts</Link>
      </div>
    </header>
  )
}

export default AppHeader
