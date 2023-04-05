// console.log("yo")


const fs=require('fs');
const csv=require('csv-parser');

var num=0;
var vat=0;
var total=0;

fs.createReadStream("./orders.csv").pipe(csv()).on('data',(r)=>{
    
    const totalIncl=parseFloat(r.TotalIncl);
    const vatAmount=parseFloat(r.VatAmount);
    
    num++;
   
    total=total+totalIncl;
    vat=vat+vatAmount;
  
})
  .on('end',()=>{
    
    console.log(`No of orders = ${num}`);
    console.log(`Total = ${total.toFixed(2)}`);
    console.log(`Vat = ${vat.toFixed(2)}`);
 
});