import React, { Component } from 'react'
import { GridCell } from './GridCell'
import './Roadmap.css'

export default class Roadmap extends Component {
  state = {
    sheetIndex: 0,
    chartTypes: ['0'], //0=Capability Matrix, 1=Roadmap
    titles: [],
    data: []
  }

  componentDidMount() {
    setTimeout(
      function() {
        let titles = []
        let chartTypes = []
        let data = []
        window.roadmap.forEach(sheet => {
          const [chartType, title] = sheet.title.split('.')
          titles.push(title)
          chartTypes.push(chartType)
          data.push(sheet.data)
        })

        this.setState({ chartTypes, titles, data })
      }.bind(this),
      1000
    )
  }

  render() {
    const { data, chartTypes, titles, sheetIndex } = this.state
    if (!data || data.length === 0) return null

    const gridCells = createGridCells(data[sheetIndex], chartTypes[sheetIndex])

    return (
      <div className="roadmap">
        <h1 className="roadmap__title">{titles[sheetIndex]}</h1>
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
