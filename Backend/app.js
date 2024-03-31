import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import sequelize from "./utils/database.js";
import Noterouter from "./routes/notes.js";
import dotenv from "dotenv";
dotenv.config();

const port = 5000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/notes', Noterouter);


sequelize.sync()
.then(() => {
    console.log(`Server is running at ${port}`);
    app.listen(port);
})
.catch(err => {
    console.log(err);
})