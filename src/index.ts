import express, {Request, Response} from "express"


const app = express()

// const corsMiddleware = cors()

const port = process.env.PORT || 5000

const addresses = [{value: 'Gorovca 8'}, {value: "Chernychevskogo 44"}]

app.get('/', (req:Request, res:Response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/addresses', (req:Request, res:Response) => {
    res.send(addresses)
})