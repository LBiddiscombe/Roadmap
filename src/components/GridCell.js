import React from 'react'
import Module from './Module'
import Lane from './Lane'
import Item from './Item'
import StatusItem from './StatusItem'

function GridCell(props) {
  const { item } = props
  const colourise = 'lane'

  if (item.type === 'module') return <Module item={item} colourise={colourise} />
  if (item.type === 'lane') return <Lane item={item} colourise={colourise} />
  if (item.type === 'item') return <Item item={item} colourise={colourise} />
  if (item.type === 'statusitem') return <StatusItem item={item} colourise={colourise} />

  // Also return filler to preserve grid space
  return <div className="roadmap__griditem-filler" />
}

export { GridCell }
