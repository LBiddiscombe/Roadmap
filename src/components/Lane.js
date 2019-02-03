import React from 'react'
import getColors from '../utils/getColors'

const Lane = props => {
  const { item, colourise } = props
  return (
    <div className="roadmap__griditem-lane" style={colourise === 'lane' ? getColors(item.col) : {}}>
      {' '}
      {item.value}
    </div>
  )
}

export default Lane
