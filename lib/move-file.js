const { rename } = require('fs').promises
const logger = require('./logger')

module.exports = async (from, to) => {
  try {
    await rename(from, to)
    logger('info', ['move-file', from, to, 'success'])
  } catch (error) {
    logger('error', ['move-file', from, to, 'error'])
    throw error
  }
}
