import express from 'express'
import cors from 'cors'
import { songClient } from './api/api.js'
import { artistClient } from './api/api.js'
const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world!!')
})
app.get('/artists', (req, res) => {
    res.send(artistClient)
})
app.get('/songs', (req, res) => {
    res.send(songClient)
})

app.listen(3000, () => console.log('Server rodando!'))