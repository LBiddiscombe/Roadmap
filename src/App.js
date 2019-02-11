import React, { useState } from 'react'
import './App.css'
import Roadmap from './components/Roadmap'
import Nav from './components/Nav'
import ImportFile from './components/ImportFile'
import importExcel from './utils/importExcel'

function App() {
  const [sheetIndex, setSheetIndex] = useState(0)
  const [roadmap, setRoadmap] = useState([{ chartType: '', title: '', data: [] }])
  const { chartType, title, data } = roadmap[sheetIndex]
  const titles = roadmap.map(sheet => sheet.title)
  const loaded = roadmap[0].data.length

  const handleChange = async e => {
    setRoadmap(await importExcel(e))
  }

  return (
    <div className="App">
      {!loaded && <ImportFile handleChange={handleChange} />}
      {loaded && <Nav titles={titles} handleClick={setSheetIndex} />}
      {loaded && <Roadmap chartType={chartType} title={title} data={data} />}
    </div>
  )
}

export default App
