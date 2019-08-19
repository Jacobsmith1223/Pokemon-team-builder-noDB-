
const control = require('./controller')
const express = require('express')
const cors = require('cors')




// Make the app 
const app = express()

// TLM
app.use(express.json())
app.use(cors())

// Endpoints

app.get('/api/pokemon', control.getget)

app.post('/api/pokemon', control.getpost)

app.put('/api/pokemon/:id', control.getput)

app.delete(`/api/pokemon/:id`, control.getdelete)

// Make the server listen 

app.listen(8080,() => {
    console.log('Server is up and ready to serve')
});