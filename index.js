
const{v4:uuidv4}=require("uuid");
const express=require('express');
const server=express();
server.use(express.json());
const users={};
function isValidEmail(email){
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
server.get("/", (req, res) => {
  res.send("Server is running✅ ");
});
server.post("/users",(req,res)=>{
    const {name,email,age}=req.body;
    if(!name||!email||age===undefined){
        return res.status(400).json({error:"All feilds are required"});
    }
    if(!isValidEmail(email)){
        return res.status(400).json({error:"invalid email format"});
    }
    if(typeof age !=="number" || age<=0){
        return res.status(400).json({error:"Age must be positive number"});
    }
    const id=uuidv4();
    users[id]={id,name,email,age};
    res.status(201).json(users[id]);
});
   server.get("/users",(req,res)=>{
    res.status(200).json(Object.values(users));
   });
   server.get("/users/:id",(req,res)=>{
    const user=users[req.params.id];
    if(!user){
        return res.status(404).json({error:"user not found"});
    }
    res.status(200).json(user);
   });
   server.put("/users/:id",(req,res)=>{
    const user=users[req.params.id];
    if(!user){
        return res.status(404).json({error:"user not found"});
    }
    const {name,email,age}=req.body;
    if(email && !isValidEmail(email)){
        return res.status(400).json({error:"invalid email format"});
    }
    if(age !==undefined && age<=0){
        return res.status(400).json({error:"Age must be positive"});
    }
    users[req.params.id]={
        ...user,
        name:name ?? user.name,
        email:email ?? user.email,
        age: age ?? user.age,
    };
    res.status(200).json(users[req.params.id]);
   });
   server.delete("/users/:id",(req,res)=>{
    if(!users[req.params.id]){
        return res.status(404).json({error:"User not found"});
    }
    delete users[req.params.id];
    res.status(204).send();
   });
   server.listen(4000,()=>{
     console.log("server running on http://localhost:4000");
   });


