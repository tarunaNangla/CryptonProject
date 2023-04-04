
const fs=require("fs");


//dataCreate a node js program "OrderSummary" which reads a csv file data and
// prints the total and summary of orders.
// Csv File Format:
// OrderDate,Code,Account,TotalIncl,TotalExcl,VatAmount
// 12/09/2023,ORD0002032,Ram,28.08,26,2.08
const data=`
  OrderDate,Code,Account,TotalIncl,TotalExcl,VatAmount
  12/09/2023,ORD0002032,Ram,28.08,26,2.08
`;

fs.writeFile("data.csv",data,"utf-8",(error)=>{
  
    if(error) 
    {
        console.log(error);
    }    
    else 
    {
        console.log(data);
    }
});