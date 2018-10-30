(async () => {
  const getNextJob = require('./lib/get-next-job')
  const logger = require('./lib/logger')
  const { DONE_DIRECTORY_PATH, QUEUE_DIRECTORY_PATH } = require('./config')
  const generateEmail = require('./lib/generate-email')
  const sendMail = require('./lib/send-mail')
  const moveFile = require('./lib/move-file')
  const job = await getNextJob()
  if (job) {
    logger('info', ['index', 'got job', job])
    const data = require(`./${QUEUE_DIRECTORY_PATH}/${job}`)
    const email = generateEmail(data)
    await sendMail(email)
    const fromPath = `${QUEUE_DIRECTORY_PATH}/${job}`
    const toPath = `${DONE_DIRECTORY_PATH}/${job}`
    await moveFile(fromPath, toPath)
    logger('info', ['index', job, 'finished'])
  } else {
    logger('info', ['index', 'no jobs', 'finished'])
  }
})()
