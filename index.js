require('dotenv').config()
const express = require("express");
const dbConnect = require("./Connection/connection");
const app = express();
var subscribers = require("./routes/app");
const port = 3000 ;

app.use(express.json());

//connect DATABASE
dbConnect()
.then(()=>{console.log('connecion to DataBAse')

app.listen(port, () => console.log(`App listening on port ${port}!`));
})

//call a ROUTER
app.use("/", subscribers);

// Start Server

