import React, { Component } from 'react'
import './App.css'
import Roadmap from './components/Roadmap'
import Nav from './components/Nav'
import ImportFile from './components/ImportFile'

class App extends Component {
  state = {
    sheetIndex: 0,
    chartTypes: ['0'], //0=Capability Matrix, 1=Roadmap
    titles: [],
    data: []
  }

  render() {
    const { sheetIndex, chartTypes, titles, data } = this.state

    return (
      <div className="App">
        {data.length === 0 && <ImportFile handleChange={this.handleChange} />}
        <Nav titles={titles} handleClick={this.setSheetIndex} />
        <Roadmap
          chartType={chartTypes[sheetIndex]}
          title={titles[sheetIndex]}
          data={data[sheetIndex]}
        />
      </div>
    )
  }

  handleChange = e => {
    const file = e.target.files[0]
    if (!file) {
      return
    }

    const reader = new FileReader()

    reader.onload = function(e) {
      const data = new Uint8Array(e.target.result)
      const wb = window.XLSX.read(data, { type: 'array' })
      window.roadmap = []
      wb.SheetNames.forEach((wsname, index) => {
        const ws = wb.Sheets[wsname]
        window.roadmap.push({
          title: wsname,
          data: window.XLSX.utils.sheet_to_json(ws, {
            defval: ''
          })
        })
      })
      this.setState(importExcel())
    }.bind(this)

    reader.readAsArrayBuffer(file)
    e.target.value = null
  }

  setSheetIndex = sheet => {
    this.setState({ sheetIndex: sheet })
  }
}

const importExcel = () => {
  let titles = []
  let chartTypes = []
  let data = []
  window.roadmap.forEach(sheet => {
    if (sheet.title.split('.').length === 2) {
      const [chartType, title] = sheet.title.split('.')
      titles.push(title)
      chartTypes.push(chartType)
      data.push(sheet.data)
    }
  })
  return { chartTypes, titles, data }
}

export default App
