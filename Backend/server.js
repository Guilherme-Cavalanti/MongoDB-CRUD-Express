express = require("express")
cors = require("cors")
const connection = require("./db/connection")
const routes = require("./routes/routes")

const app = express()

app.use(cors())

app.use(express.json())

app.use("/api",routes)
const online = () => {
    console.log("Server online")
}

connection()
app.listen(3000,online)