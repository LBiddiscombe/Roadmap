import React from 'react'
import getColors from '../utils/getColors'

const Module = props => {
  const { item, colourise } = props
  return (
    <div
      className="roadmap__griditem-module"
      style={colourise === 'module' ? getColors(item.row) : {}}
    >
      <span>{item.value}</span>
    </div>
  )
}

export default Module
