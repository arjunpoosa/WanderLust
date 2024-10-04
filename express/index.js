const express= require("express");
const app=express();

let port =3000;

app.listen(port ,()=>{
    console.log(`App is listening at  port ${port}`);
})
// app.use((req,res)=>{
//     // console.log(req);
//     console.log("request recieved");
//     let code ="<h1>Fruits </h1><ul><li>apple</li></ul> ";

//     res.send(code); 
// });

// routing 
app.get("/",(req,res)=>{
    res.send("It is the home page");
  console.log("home page");
});
// app.get("/:username/:id",(req,res)=>{
   
//     let {username,id}=req.params;
//     res.send(`<h1>hello @${username},${id} to our page</h1>`);
//     console.log("hello",username,id);
// })

app.get("/search",(req,res)=>{
    let {q}=req.query;
    res.send(`<h1>search results for ${q}</h1>`);
    console.log(q);
})