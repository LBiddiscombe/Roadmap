import React from 'react'
import Module from './Module'
import Lane from './Lane'
import Item from './Item'
import StatusItem from './StatusItem'

function GridCell(props) {
  const { item, chartType } = props
  const colourise = 'lane'

  if (item.type === 'module') return <Module item={item} colourise={colourise} />
  if (item.type === 'lane') return <Lane item={item} colourise={colourise} />
  if (item.type === 'item') {
    if (chartType === '0') return <StatusItem item={item} colourise={colourise} />
    if (chartType === '1') return <Item item={item} colourise={colourise} />
  }

  // If none of the above return filler to preserve grid space
  return <div className="roadmap__griditem-filler" />
}

export { GridCell }
