import React, { Component } from 'react'
import './App.css'
import Roadmap from './components/Roadmap'
import Nav from './components/Nav'
import ImportFile from './components/ImportFile'
import importExcel from './utils/importExcel'

class App extends Component {
  state = {
    sheetIndex: 0,
    roadmap: [{ chartType: '', title: '', data: [] }]
  }

  render() {
    const { sheetIndex, roadmap } = this.state
    const { chartType, title, data } = roadmap[sheetIndex]
    const titles = roadmap.map(sheet => sheet.title)

    if (!roadmap[0].data.length) return <ImportFile handleChange={this.handleChange} />

    return (
      <div className="App">
        <Nav titles={titles} handleClick={this.setSheetIndex} />
        <Roadmap chartType={chartType} title={title} data={data} />
      </div>
    )
  }

  handleChange = e => {
    importExcel(e).then(res => this.setState(res))
  }

  setSheetIndex = sheetIndex => {
    this.setState({ sheetIndex })
  }
}

export default App
