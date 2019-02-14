import React, { Component } from 'react'
import GridCell from './GridCell'
import Lane from './Lane'
import Module from './Module'
import createGridCells from '../utils/createGridCells'
import './Roadmap.css'

export default class Roadmap extends Component {
  componentDidMount(prevState) {
    const items = [...document.querySelectorAll('.griditem')]
    const modules = [...document.querySelectorAll('.roadmap__gridwrapper-module')]
    const cols = items.length / modules.length

    modules.forEach((module, i) => {
      const rowHeight = items[cols * i].clientHeight
      module.setAttribute('style', 'height:' + rowHeight + 'px')
    })
  }

  render() {
    const { data, chartType, title } = this.props
    if (!data || data.length === 0) return null

    const gridCells = createGridCells(data, chartType)
    const colourise = 'lane'

    return (
      <div className="roadmap" id="roadmap">
        <h1 className="roadmap__title">{title}</h1>
        <div className="roadmap__gridwrapper">
          <div className="roadmap__gridwrapper-filler" />
          <div
            className="roadmap__gridwrapper-lanes"
            style={{ '--columns': gridCells.lanes.length }}
          >
            {gridCells.lanes.map((item, i) => (
              <Lane item={{ value: item, col: i }} colourise={colourise} />
            ))}
          </div>
          <div
            className="roadmap__gridwrapper-modules"
            style={{ '--columns': gridCells.modules.length }}
          >
            {gridCells.modules.map((item, i) => (
              <Module item={{ value: item, row: i }} colourise={colourise} />
            ))}
          </div>
          <div className="roadmap__grid" style={{ '--columns': gridCells.lanes.length }}>
            {gridCells.items.map((item, i) => (
              <GridCell key={i} item={item} chartType={chartType} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
