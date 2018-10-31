[![Build Status](https://travis-ci.com/telemark/tools-send-surveys.svg?branch=master)](https://travis-ci.com/telemark/tools-send-surveys)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# tools-send-surveys

Send surveys via email

## Setup

Configure an .env file

```
DONE_DIRECTORY_PATH=test/directories/done
ERRORS_DIRECTORY_PATH=test/directories/errors
QUEUE_DIRECTORY_PATH=test/directories/queue
MAIL_SERVICE_JWT_SECRET=Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go
MAIL_SERVICE_URL=https://mail.service.io/api
```

## Usage

Add job-files in the queue-directory.

A job-file is a json-file formatted like this

```JavaScript
{
  "email": "myMail@example.com",
  "isUnderAge": false
}
```

To start the process do a ```$ npm start```

This will pick jobs from the queue. Generate email. Send mail via the service. Move job to done- or error-directory.

## Related

- [micro-mail](https://github.com/telemark/micro-mail) - microservice for sending emails
- [tools-generate-survey-list](https://github.com/telemark/tools-generate-survey-list) - tool for generating jobs for this module 

# License

[MIT](LICENSE)
