const fs = require('fs');
let datas = [
  {"id":1,"first_name":"Alfredo","last_name":"Manuel"},
  {"id":2,"first_name":"Generosa","last_name":"Manuel"}
];
 const {first_name,last_name} = {first_name:"fedy",last_name:"Chawema"};

 const indexData = datas.findIndex((data)=>data.id === 1)

datas[indexData]={
  ...datas[indexData],
  first_name
}


fs.writeFile('./data.json',JSON.stringify(datas,null,2),'utf8',(err)=>{
  if(err){
   return console.log(err)
  }
})
