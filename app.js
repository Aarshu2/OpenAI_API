const express = require('express')
const {generateMeta, generateImage} = require('./controllers/openaiController')


// app setup

const app = express()
app.listen(4000, () => console.log('listening for requests on port 4000'))


app.use(express.json())
app.use(express.static('public'))

// routes
app.post('/openai/meta', generateMeta) // When we send a post request to this url, we run genMeta func
app.post('/openai/image', generateImage) // When we send a post request to this url, we run genImage func