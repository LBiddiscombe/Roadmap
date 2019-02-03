import React from 'react'

function GridItem(props) {
  const { item } = props
  const classList = 'roadmap__griditem-' + item.type
  const colourise = 'lane'

  if (item.type === 'module')
    return <Module item={item} classList={classList} colourise={colourise} />
  if (item.type === 'lane') return <Lane item={item} classList={classList} colourise={colourise} />
  if (item.type === 'item') return <Item item={item} classList={classList} colourise={colourise} />
  if (item.type === 'statusitem')
    return <StatusItem item={item} classList={classList} colourise={colourise} />

  // Also return filler to preserve grid space
  return <div className={classList} />
}

const getColors = val => {
  //val = val + 1
  return { '--bg': 'var(--bg' + val + ')', '--fg': 'var(--fg' + val + ')' }
}

const Module = props => {
  const { item, classList, colourise } = props
  return (
    <div className={classList} style={colourise === 'module' ? getColors(item.row) : {}}>
      <span>{item.value}</span>
    </div>
  )
}
const Lane = props => {
  const { item, classList, colourise } = props
  return (
    <div className={classList} style={colourise === 'lane' ? getColors(item.col) : {}}>
      {' '}
      {item.value}
    </div>
  )
}

const Item = props => {
  const { item, classList, colourise } = props
  return (
    <ul className={classList}>
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

const StatusItem = props => {
  const { item, classList, colourise } = props
  return (
    <ul className={classList}>
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
      return <i className="fas fa-times-circle" style={{ color: 'tomato' }} />
    case 1:
      return <i className="fas fa-exclamation-circle" style={{ color: 'orange' }} />
    case 2:
      return <i className="fas fa-check-circle" style={{ color: 'green' }} />
    default:
      return <i className="fas fa-info-circle" style={{ color: 'mediumslateblue' }} />
  }
}

export { GridItem }
