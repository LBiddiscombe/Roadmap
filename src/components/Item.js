import React from 'react'
import getColors from '../utils/getColors'

const Item = props => {
  const { item, colourise } = props
  return (
    <ul className="roadmap__griditem-item" style={getColors(item.col)}>
      {item.value.map(
        listitem =>
          listitem && (
            <li
              key={listitem}
              style={
                colourise === 'module'
                  ? getColors(item.row)
                  : colourise === 'lane'
                  ? getColors(item.col)
                  : {}
              }
            >
              {listitem}
            </li>
          )
      )}
    </ul>
  )
}

export default Item
