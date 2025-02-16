import axios from 'axios'

const URL= 'http://localhost:3000'

export const responseArtists= await axios.get(`${URL}/artists`)
export const responseSongs= await axios.get(`${URL}/songs`)

// console.log(responseArtists.data)
// console.log(responseSongs.data)