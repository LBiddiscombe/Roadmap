import React, { Component } from 'react'
import { GridItem } from './GridItem'
import './Roadmap.css'

export default class Roadmap extends Component {
  state = {
    title: '',
    data: []
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ title: window.roadmap.title, data: window.roadmap.data })
      }.bind(this),
      1000
    )
  }

  render() {
    const { data } = this.state
    if (!data || data.length === 0) return null

    const gridItems = createGridItems(data)
    return (
      <div className="roadmap">
        <h1 className="roadmap__title">{this.state.title}</h1>
        <div className="roadmap__grid" style={{ '--columns': gridItems.columns }}>
          {gridItems.items.map((item, i) => (
            <GridItem key={i} item={item} />
          ))}
        </div>
      </div>
    )
  }
}

const createGridItems = data => {
  const modules = data.map(row => row.Module)
  const lanes = Object.keys(data[0]).splice(1)

  let items = [
    { type: 'filler' },
    ...lanes.map((value, col) => ({ type: 'lane', row: -1, col, value }))
  ]
  modules.forEach((module, row) => {
    items.push({ type: 'module', row, value: module })
    lanes.forEach((lane, col) => {
      items.push({ type: 'item', row, col, value: data[row][lane].split('\n') })
    })
  })

  return {
    columns: lanes.length,
    items
  }
}
