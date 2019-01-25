const items = [
  {
    module: 'Order',
    'Iteration 0': '',
    'Iteration 1': 'Refunds',
    'Iteration 2': 'Persist basket\nPost membership'
  },
  { module: 'Basket', 'Iteration 0': 'Something', 'Iteration 1': 'Baskety', 'Iteration 2': '' }
]

console.log(Object.keys(items[0]))

const modules = items.map(row => row.module)
const lanes = Object.keys(items[0]).splice(1)

let list = [{ type: 'filler' }, ...lanes.map(value => ({ type: 'lane', value }))]
modules.forEach((module, i) => {
  list.push({ type: 'module', value: module })
  lanes.forEach(lane => {
    list.push({ type: 'item', value: items[i][lane].split('\n') })
  })
})

console.log(list)

/*
//getColors(prop: ['bg','fg'])
const getColors = index => {
  return { '--bg': 'var(--bg' + index + ')', '--fg': 'var(--fg' + index + ')' }
}

console.log(getColors(2))

const items = [
  { module: 'Promotion', lane: 'Phase 1', value: 'Evaluate basket promotions' },
  { module: 'Promotion', lane: 'Phase 2', value: 'Query promotion sets' },
  { module: 'Promotion', lane: 'Phase 2', value: 'Validate store promotion' },
  { module: 'Product', lane: 'Phase 1', value: 'CTS product info' },
  { module: 'Product', lane: 'Phase 1', value: 'Images' }
]

const modules = [...new Set(items.map(item => item.module))]
const lanes = [...new Set(items.map(item => item.lane))]

let list = [{ type: 'filler' }, ...lanes.map(value => ({ type: 'lane', value }))]
modules.forEach(module => {
  list.push({ type: 'module', value: module })
  lanes.forEach(lane => {
    const val = items.filter(i => i.module === module && i.lane === lane)
    if (val.length === 0) {
      list.push({ type: 'item', value: [''] })
    } else {
      list.push({ type: 'item', value: val.map(v => v.value) })
    }
  })
})

const colours = [
  { 'background-color': '#e6194B', color: '#fff' },
  { 'background-color': '#3cb44b', color: '#fff' },
  { 'background-color': '#ffe119', color: '#000' },
  { 'background-color': '#4363d8', color: '#fff' },
  { 'background-color': '#f58231', color: '#fff' },
  { 'background-color': '#911eb4', color: '#fff' },
  { 'background-color': '#42d4f4', color: '#000' },
  { 'background-color': '#f032e6', color: '#fff' },
  { 'background-color': '#bfef45', color: '#000' },
  { 'background-color': '#fabebe', color: '#000' },
  { 'background-color': '#469990', color: '#fff' },
  { 'background-color': '#e6beff', color: '#000' },
  { 'background-color': '#9A6324', color: '#fff' },
  { 'background-color': '#fffac8', color: '#000' },
  { 'background-color': '#800000', color: '#fff' },
  { 'background-color': '#aaffc3', color: '#000' },
  { 'background-color': '#808000', color: '#fff' },
  { 'background-color': '#ffd8b1', color: '#000' },
  { 'background-color': '#000075', color: '#fff' },
  { 'background-color': '#a9a9a9', color: '#fff' },
  { 'background-color': '#ffffff', color: '#000' },
  { 'background-color': '#000000', color: '#fff' }
]
*/
