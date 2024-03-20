const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./UserRoutes")

const app = express();
const port = 5500;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.json());

app.use(router);

app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname + "/index.html"));
})



// app.get("/api/v1/userdata",(req,res)=>{
//     res.sendFile(path.join(__dirname + "/index.html"))
// })
// app.get("/about",(req,res)=>{
//     res.send("<h1>About page</h1>");
// });
// app.get("/contact",(req,res)=>{
//     res.send("<h1>contact page</h1>");
// });
// app.post("/",(req,res)=>{
//    console.log("namee")
// ;});

// app.post("/api/v1/login",(req,res)=>{
//     res.send(`<h1>Done Mr.${req.body.name}</h1> <h2>Your email is ${req.body.email}</h2> <h3>Your password is ${req.body.password}</h3>`)
//     console.log(req.body);
// });

app.listen(port,()=>{
    console.log(`server is working on port: ${port}`);
});
 


 