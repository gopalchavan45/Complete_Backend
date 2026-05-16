import express from "express"; //importing express module
const app = express(); //here we created server but run yet

app.get("/", (req, res) => {
  res.send("hellow world");//here we send response to client when client request to server with get method and url is / (home page)
});//here we create server program and we can run it with node server.js



export default app; //here we export app to use it in other file like index.js where we run the server


 