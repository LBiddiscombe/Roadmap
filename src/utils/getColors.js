const getColors = val => {
  //val = val + 1
  return {
    '--bg': 'var(--bg' + val + ')',
    '--fg': 'var(--fg' + val + ')',
    '--cellbg': val % 2 === 0 ? 'var(--even)' : 'var(--odd)'
  }
}

export default getColors
