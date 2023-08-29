import express, { type Express, type Request, type Response } from 'express'
import 'dotenv/config'

const app: Express = express()
const PORT = process.env.PORT ?? 3000

app.use((req: Request, res: Response) => res.send(req.originalUrl))

app.listen(PORT, (): void => {
  console.log('Listening on port', PORT)
})
