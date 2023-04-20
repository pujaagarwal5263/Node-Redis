const express=require("express");
const {pobj1}=require("./data");
const Redis=require("redis");

const client=Redis.createClient();

const app=express();

async function myFunc(){
    const res= await pobj1;
        console.log(res);
        return res;
}

app.get("/",()=>{
    const val=myFunc();
    console.log(val);
    client.setEx("data",3600,val);
})
app.listen(3000,()=>{
    console.log("Server is running");
})
 