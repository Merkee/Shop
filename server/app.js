const express = require('express');
const app = express();
const mysql = require('mysql2');
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "shop",
  password: "root"
});

/*app.get('/hello', (req, res, next) => {
  res.send('Step 1');
  console.log('Step 1');
  next();
}, (req, res, next) => {
  res.send('Step 2');
  console.log('Step 2');
});*/

app.get('/selectProducts', async (req, res, next) => {
  let productData = {};

  productData.arr = () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT `id`, `name`, `image`, `cost`, `discount` FROM `products`', (err, rows) => {
        if(err) {
          return(reject);
        } else {
          return resolve(rows);
        }
      })
    })
  }

  let result = await productData.arr();
  res.json(result);
});


//res.send(res.json(result));

app.listen(4000, () => {
  console.log('Server started.')
});