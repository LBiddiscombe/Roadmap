const createGridCells = (data, chartType) => {
  const modules = data.map(row => row.Module)
  const lanes = Object.keys(data[0]).splice(1)

  let items = []
  modules.forEach((module, row) => {
    //items.push({ type: 'module', row, value: module })
    lanes.forEach((lane, col) => {
      items.push({ type: 'item', row, col, value: data[row][lane].split('\n') })
    })
  })

  return {
    modules,
    lanes,
    items
  }
}

export default createGridCells
