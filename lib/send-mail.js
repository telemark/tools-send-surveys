const axios = require('axios')
const generateSystemToken = require('./generate-system-token')
const logger = require('./logger')
const { MAIL_SERVICE_JWT_SECRET, MAIL_SERVICE_URL } = require('../config')

module.exports = async email => {
  axios.defaults.headers.common['Authorization'] = generateSystemToken(MAIL_SERVICE_JWT_SECRET)
  logger('info', ['send-mail', MAIL_SERVICE_URL, 'start'])
  try {
    const { data } = await axios.post(MAIL_SERVICE_URL, email)
    logger('info', ['send-mail', MAIL_SERVICE_URL, 'to', email.to, 'success'])
    return data
  } catch (error) {
    logger('error', ['send-mail', MAIL_SERVICE_URL, 'to', email.to, error])
    return false
  }
}
