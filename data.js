const data=[
    {name:"Puja", age:22},
    {name:"Shreya", age: 23},
    {name:"aaditya", age:13}
]


let pobj1= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(data);
    },5000);
});

module.exports={pobj1}