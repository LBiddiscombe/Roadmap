import React from 'react'

const getColors = val => {
  //val = val + 1
  return { '--bg': 'var(--bg' + val + ')', '--fg': 'var(--fg' + val + ')' }
}

function GridItem(props) {
  const { item } = props
  const classList = 'roadmap__griditem-' + item.type
  const colourise = 'module'

  if (item.type === 'module')
    return (
      <div className={classList} style={colourise === item.type ? getColors(item.row) : {}}>
        <span>{item.value}</span>
      </div>
    )

  if (item.type === 'lane')
    return (
      <div className={classList} style={colourise === item.type ? getColors(item.col) : {}}>
        {' '}
        {item.value}
      </div>
    )

  if (item.type === 'item')
    return (
      <ul className={classList}>
        {item.value.map(
          i =>
            i && (
              <li
                key={i}
                style={colourise === 'module' ? getColors(item.row) : getColors(item.col)}
              >
                {i}
              </li>
            )
        )}
      </ul>
    )

  // Also return filler to preserve grid space
  return <div className={classList} />
}

export { GridItem }
