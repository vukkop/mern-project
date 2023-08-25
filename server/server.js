const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
require("./config/mongoose.config");
app.use(cors({
    origin: '18.117.87.30'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./routes/listing.routes")(app);

app.listen(port, '0.0.0.0', () => console.log(`Listening on port: ${port}`));
