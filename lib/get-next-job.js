const { readdir } = require('fs').promises
const logger = require('./logger')
const config = require('../config')

module.exports = async () => {
  let job = false
  const allFiles = await readdir(config.QUEUE_DIRECTORY_PATH)
  const files = allFiles.filter(file => file.includes('.json'))
  logger('info', ['get-next-job', 'got', files.length, 'files'])
  if (files.length > 0) {
    job = files[0]
  }
  return job
}
