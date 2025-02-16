import { songsArray } from '../front-end/assets/database/songs.js'
import { artistArray } from '../front-end/assets/database/artists.js'
import { db } from './api/api.js'
const newartist = artistArray.map((art) => {
    const newobj = { ...art }
    delete newobj.id
    return newobj
})
const newsong = songsArray.map((art) => {
    const newobj = { ...art }
    delete newobj.id
    return newobj
})


const responseArtist = await db.collection('artist').insertMany(newartist)
const responseSong = await db.collection('songs').insertMany(newsong)

console.log('Pronto')