import React from 'react'
import './ImportFile.css'

class ImportFile extends React.Component {
  render() {
    return (
      <div className="importfile">
        <h1>Excel Roadmap Viewer</h1>
        <form className="importfile__form">
          <p>
            <input type="file" accept=".xlsx" id="uploadexcel" onChange={this.props.handleChange} />
            <label htmlFor="uploadexcel">
              <i className={'fas fa-upload fa-7x'} />
              <p>Upload Excel file</p>
            </label>
          </p>
        </form>
      </div>
    )
  }
}

export default ImportFile
