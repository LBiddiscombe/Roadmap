const importExcel = e => {
  return new Promise(function(resolve, reject) {
    const file = e.target.files[0]

    if (!file) {
      reject('no file selected')
    }

    const reader = new FileReader()
    reader.readAsArrayBuffer(file)
    e.target.value = null

    reader.onload = function(e) {
      const data = new Uint8Array(e.target.result)
      const wb = window.XLSX.read(data, { type: 'array' })
      const roadmap = []
      wb.SheetNames.forEach(wsname => {
        if (wsname.split('.').length === 2) {
          const [chartType, title] = wsname.split('.')
          const ws = wb.Sheets[wsname]
          roadmap.push({
            chartType,
            title,
            data: window.XLSX.utils.sheet_to_json(ws, {
              defval: ''
            })
          })
        }
      })
      resolve({ roadmap })
    }
  })
}

export default importExcel
