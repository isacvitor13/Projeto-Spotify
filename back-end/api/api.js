import { MongoClient } from "mongodb"
const URL = "mongodb+srv://isac24vitor:AGE24b9HddhyXJ9y@cluster0.k9wve.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URL)

export const db = client.db("spotify")

export const songClient = await db.collection("songs").find({}).toArray()
export const artistClient = await db.collection("artist").find({}).toArray()

