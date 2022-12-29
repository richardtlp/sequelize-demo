const express = require('express')
const { router } = require('./src/routes')

require('dotenv').config()

const app = express()
const port = process.env.PORT

app.use(express.json())

app.use('/api/v1', router)

app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500).send({ error: err.message })
  next()
})

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})
