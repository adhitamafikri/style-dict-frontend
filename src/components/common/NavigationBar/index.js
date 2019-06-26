import React from 'react'
import './style.scss'

import { Link } from 'react-router-dom'

const linkPaths = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Create',
    path: '/style/create'
  },
  {
    name: 'Import',
    path: '/style/import'
  }
]

const renderLinks = () => (
  linkPaths.map((link, key) => {
    return (
      <Link to={link.path} key={key}>
        {link.name}
      </Link>
    )
  })
)

const NavigationBar = () => (
  <div className='NavigationBar'>
    {renderLinks()}
  </div>
)

export default NavigationBar
