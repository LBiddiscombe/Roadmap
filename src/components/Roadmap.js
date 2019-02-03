import React, { Component } from 'react'
import { GridCell } from './GridCell'
import './Roadmap.css'

export default class Roadmap extends Component {
  state = {
    chartType: '0',
    title: '',
    data: []
  }

  componentDidMount() {
    setTimeout(
      function() {
        const [chartType, title] = window.roadmap.title.split('.')
        this.setState({ chartType, title, data: window.roadmap.data })
      }.bind(this),
      1000
    )
  }

  render() {
    const { data } = this.state
    if (!data || data.length === 0) return null

    const gridCells = createGridCells(data, this.state.chartType)
    return (
      <div className="roadmap">
        <h1 className="roadmap__title">{this.state.title}</h1>
        <div className="roadmap__grid" style={{ '--columns': gridCells.columns }}>
          {gridCells.items.map((item, i) => (
            <GridCell key={i} item={item} />
          ))}
        </div>
      </div>
    )
  }
}

const createGridCells = (data, chartType) => {
  const modules = data.map(row => row.Module)
  const lanes = Object.keys(data[0]).splice(1)

  let items = [
    { type: 'filler' },
    ...lanes.map((value, col) => ({ type: 'lane', row: -1, col, value }))
  ]
  modules.forEach((module, row) => {
    items.push({ type: 'module', row, value: module })
    lanes.forEach((lane, col) => {
      if (chartType === '0') {
        items.push({ type: 'statusitem', row, col, value: data[row][lane].split('\n') })
      } else {
        items.push({ type: 'item', row, col, value: data[row][lane].split('\n') })
      }
    })
  })

  return {
    columns: lanes.length,
    items
  }
}
