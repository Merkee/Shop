const express = require('express');
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');

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
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

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
      });
    })
  }
  let result = await productData.arr();
  res.json(result);
});

app.post('/getSearch', async (req, res) => {
  const search = req.body.search;
  let productData = {};
  productData.arr = () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT `id`, `name`, `image`, `cost`, `discount` FROM `products` WHERE `name` LIKE \'%' + search + '%\'', (err, rows) => {
        if(err) {
          return(reject);
        } else {
          return resolve(rows);
        }
      });
    })
  }
  let result = await productData.arr();
  res.json(result);
});

app.post('/getTypes', async (req, res) => {
  const types = req.body.types;
  let productData = {};

  productData.arr = () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT `id`, `name`, `image`, `cost`, `discount` FROM `products` ' + types, (err, rows) => {
        if(err) {
          return(reject);
        } else {
          return resolve(rows);
        }
      });
    })
  }
  let result = await productData.arr();
  res.json(result);
});

app.post('/userSignUp', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const name = req.body.name;
  const sourname = req.body.sourname;
  const address = req.body.address;
  const phone = req.body.phone;

  connection.query(`INSERT INTO \`users\` (\`id\`, \`username\`, \`password\`, \`email\`, \`name\`, \`sourname\`, \`address\`, \`phone\`) VALUES (NULL, '${username}', '${password}', '${email}', '${name}', '${sourname}', '${address}', '${phone}');`);
});

app.post('/userSignIn', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  let userData = {};

  userData.arr = () => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM \`users\` WHERE \`username\`= '${username}' AND \`password\` = '${password}'`, (err, rows) => {
        if(err) {
          return(reject);
        } else {
          return resolve(rows);
        }
      });
    })
  }
  let result = await userData.arr();
  res.json(result);
});

//res.send(res.json(result));

app.listen(4000, () => {
  console.log('Server started.')
});