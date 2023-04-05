// console.log("heloo")

// / console.log("hello world");

//question 4:

const express=require("express")
const fs=require("fs")
const app=express();


app.use(express.json())







// GET /users - Used to return list of the users which information like "id,
// Data will be store inside the json file.
// name, createdOn, gender, dob, city, state, pincode, modifiedOn"

app.get("/users",(req,res)=>{
    
    fs.readFile("./users.json",{encoding:"utf-8"},(err,users)=>{
        res.send(users)
    })

})

//POST /users - Used to create new user
app.post("/users",(req,res)=>{
    
    fs.readFile("./users.json",{encoding:"utf-8"},(err,users)=>{
       
        const parsed=JSON.parse(users);
        parsed.users=[...parsed.users,req.body];

        fs.writeFile("./users.json",JSON.stringify(parsed),{encoding:"utf-8"},()=>{
            res.end("Used to create new user")
        })
    })

})

//PUT /users/<userId> - Used to update an existing user
app.put("/users/:userId",(req,res)=>{
   
    const {userId} =req.params;
    
    fs.readFile("./users.json",{encoding:"utf-8"},(err,users)=>{
        const parsed=JSON.parse(users);
        parsed.users=parsed.users.filter((ele)=>ele.id!=userId)
        parsed.users=[...parsed.users,req.body]

        fs.writeFile("./users.json",JSON.stringify(parsed),{encoding:"utf-8"},()=>{
            res.end("Used to update an existing user");
        })
    })
})


//DELETE /users/<userId> - Used to delete an existing user
app.delete("/users/:userId",(req,res)=>{
    
    const {userId}=req.params;
    
    fs.readFile("./users.json",{encoding:"utf-8"},(err,users)=>{
        const parsed=JSON.parse(users);
        parsed.users=parsed.users.filter((ele)=>ele.id!=userId)

        fs.writeFile("./users.json",JSON.stringify(parsed),{encoding:"utf-8"},()=>{
            res.end("Used to delete an existing user");
        })
    })
})




const port=8088;

app.listen(port,()=>{
    console.log(`UserApiServer "http://localhost:${port}"`)
})