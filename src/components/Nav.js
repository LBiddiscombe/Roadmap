import React, { Component } from 'react'
import './nav.css'

export default class Nav extends Component {
  state = {
    isOpen: false
  }

  onClick = e => {
    this.setState({ isOpen: !this.state.isOpen })
    if (e.target.dataset.sheet) {
      this.props.handleClick(e.target.dataset.sheet)
    }
  }

  render() {
    const { titles } = this.props
    if (!titles || titles.length === 0) return null

    const panelClasses = ['nav__panel']
    if (this.state.isOpen) {
      panelClasses.push('open')
    }
    return (
      <div className="nav">
        <div className="nav__menu" onClick={this.onClick}>
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
}
