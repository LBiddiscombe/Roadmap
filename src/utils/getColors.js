const getColors = val => {
  //val = val + 1
  return { '--bg': 'var(--bg' + val + ')', '--fg': 'var(--fg' + val + ')' }
}

export default getColors
