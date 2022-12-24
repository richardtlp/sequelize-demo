const express = require('express')
const { router } = require('./src/routes')

require('dotenv').config()

const app = express()
const port = process.env.PORT

app.use(express.json())

app.use('/api/v1', router)

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})
