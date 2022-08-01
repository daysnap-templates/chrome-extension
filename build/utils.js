const path = require('path')
const nodeDir = require('node-dir')

const resolve = (dir = '') => path.join(__dirname, '..', dir)

const requireFile = (directory, recursive, regExp) => {
  if (directory[0] === '.') {
    directory = path.join(__dirname, directory)
  } else if (!path.isAbsolute(directory)) {
    directory = require.resolve(directory)
  }
  return nodeDir
    .files(directory, {
      sync: true,
      recursive,
    })
    .filter(file =>
      file.match(regExp)
    )
}

module.exports = {
  resolve,
  requireFile,
}
