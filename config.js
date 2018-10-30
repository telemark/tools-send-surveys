if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

module.exports = {
  DONE_DIRECTORY_PATH: process.env.DONE_DIRECTORY_PATH || 'test/directories/done',
  QUEUE_DIRECTORY_PATH: process.env.QUEUE_DIRECTORY_PATH || 'test/directories/queue',
  MAIL_SERVICE_JWT_SECRET: process.env.MAIL_SERVICE_JWT_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  MAIL_SERVICE_URL: process.env.MAIL_SERVICE_URL || 'https://mail.service.io/api'
}
