import React from 'react'
import getColors from '../utils/getColors'

const StatusItem = props => {
  const { item, colourise } = props
  return (
    <ul className="roadmap__griditem-statusitem griditem" style={getColors(item.col)}>
      {item.value.map(item => {
        let displayValue = item
        let status = 4
        let note = null
        const elements = displayValue.split(',').length
        if (elements >= 2) {
          status = Number(item.split(',')[0])
          displayValue = item.split(',')[1]
          if (elements >= 3) {
            note = <span className="item-note">{item.split(',')[2]}</span>
          }
        }
        return (
          item && (
            <li
              key={item}
              style={
                colourise === 'module'
                  ? getColors(item.row)
                  : colourise === 'lane'
                  ? getColors(item.col)
                  : {}
              }
            >
              <StatusIcon status={status} /> {displayValue} {note}
            </li>
          )
        )
      })}
    </ul>
  )
}

const StatusIcon = props => {
  const { status } = props
  switch (status) {
    case 0:
      return <i className="fas fa-times" style={{ color: 'tomato' }} />
    case 1:
      return <i className="fas fa-exclamation" style={{ color: 'orange' }} />
    case 2:
      return <i className="fas fa-check" style={{ color: 'green' }} />
    default:
      return <i className="fas fa-info" style={{ color: 'mediumslateblue' }} />
  }
}

export default StatusItem
