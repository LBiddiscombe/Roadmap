import React, { Component } from 'react'
import './App.css'
import Roadmap from './components/Roadmap'
import Nav from './components/Nav'

class App extends Component {
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
          if (sheet.title.split('.').length === 2) {
            const [chartType, title] = sheet.title.split('.')
            titles.push(title)
            chartTypes.push(chartType)
            data.push(sheet.data)
          }
        })

        this.setState({ chartTypes, titles, data })
      }.bind(this),
      1000
    )
  }

  setSheetIndex = sheet => {
    this.setState({ sheetIndex: sheet })
  }

  render() {
    const { sheetIndex, chartTypes, titles, data } = this.state

    return (
      <div className="App">
        <Nav titles={titles} handleClick={this.setSheetIndex} />
        <Roadmap
          chartType={chartTypes[sheetIndex]}
          title={titles[sheetIndex]}
          data={data[sheetIndex]}
        />
      </div>
    )
  }
}

export default App
