import React, { Component } from 'react'
import { GridCell } from './GridCell'
import createGridCells from '../utils/createGridCells'
import './Roadmap.css'

export default class Roadmap extends Component {
  render() {
    const { data, chartType, title } = this.props
    if (!data || data.length === 0) return null

    const gridCells = createGridCells(data, chartType)

    return (
      <div className="roadmap" id="roadmap">
        <h1 className="roadmap__title">{title}</h1>
        <div className="roadmap__grid" style={{ '--columns': gridCells.columns }}>
          {gridCells.items.map((item, i) => (
            <GridCell key={i} item={item} chartType={chartType} />
          ))}
        </div>
      </div>
    )
  }
}
