// console.log("yo")


const fs=require('fs');
const csv=require('csv-parser');

const inputFile = 'orders.csv';

let ordersCount = 0;
let ordersTotal = 0;
let vatTotal = 0;

fs.createReadStream(inputFile)
  .pipe(csv())
  .on('data', (row) => {
    const totalIncl = parseFloat(row['TotalIncl']);
    const vatAmount = parseFloat(row['VatAmount']);
    ordersCount++;
    ordersTotal += totalIncl;
    vatTotal += vatAmount;
  })
  .on('end', () => {
    console.log(`No of orders: ${ordersCount}`);
    console.log(`Total: ${ordersTotal.toFixed(2)}`);
    console.log(`Vat: ${vatTotal.toFixed(2)}`);
  });