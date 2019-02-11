import React, { useState } from 'react'
import './nav.css'

function Nav({ titles, handleClick }) {
  if (!titles || titles.length === 0) return null

  const [isOpen, setOpen] = useState(false)

  const onClick = e => {
    setOpen(!isOpen)
    e.target.dataset.sheet && handleClick(e.target.dataset.sheet)
  }

  const panelClasses = ['nav__panel']
  if (isOpen) {
    panelClasses.push('open')
  }

  return (
    <div className="nav">
      <div className="nav__menu" onClick={onClick}>
        <i className="fas fa-caret-square-down" />
        <div className={panelClasses.join(' ')}>
          <ul>
            {titles.map((title, index) => {
              return (
                <li key={title} data-sheet={index}>
                  {title}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav
