

const express = require("express");
const path = require("path");

const app = express();

// serve everything inside public
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "index.html"));
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});











// const express = require("express");
// const path = require("path");

// const app = express();

// app.use(express.static(path.join(__dirname, "public")));


// // static folders
// app.use(express.static("css"));
// app.use(express.static("images"));
// app.use(express.static("script"));

// // home route
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "html", "index.html"));
// });

// // server start
// app.listen(3000, () => {
//   console.log("Server running at http://127.0.0.1:3000");
// });







// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })








// const express = require("express");
// const app = express();
// let port=3000;
// app.listen(port, ()=>{
// console.log("i am ready");
// });


// // HTML folder ko server se link karo
// app.use(express.static("public"));

// app.listen(3000, () => {
//   console.log("Server running at http://127.0.0.1:3000");
// });

// app.get("/", (req, res) => {
//   res.sendFile( easyclass + "/html/index.html");
// });
