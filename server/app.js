const express = require('express');
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
  host: "18.208.136.162", //18.208.136.162
  user: "mercen", //rxn
  database: "mercen", //mercen
  password: "hugoze25" //hugoze25
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

app.post('/selectProducts', async (req, res, next) => {
  const params = req.body.params;
  let productData = {};
  
  productData.arr = () => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT \`id\`, \`name\`, \`image\`, \`cost\`, \`discount\` FROM \`products\` WHERE ${params}`, (err, rows) => {
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

app.post('/selectOrders', async (req, res, next) => {
  const user = req.body.user;
  let productData = {};

  productData.arr = () => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT p.name, p.image, c.id, c.time, c.count, (c.count * (p.cost - p.cost*(p.discount/100))) AS cost FROM products p, cart c WHERE p.id = c.product_id AND c.user_id = ${user} ORDER BY c.id DESC`, (err, rows) => {
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

app.post('/selectSum', async (req, res, next) => {
  const user = req.body.user;
  let allCost = {};

  allCost.arr = () => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT SUM(c.count * (p.cost - p.cost*(p.discount/100))) as all_cost FROM \`cart\` c, \`products\` p WHERE c.product_id = p.id AND c.user_id = ${user}`, (err, rows) => {
        if(err) {
          return(reject);
        } else {
          return resolve(rows);
        }
      });
    })
  }
  let result = await allCost.arr();
  res.json(result);
});
/*SELECT p.name, p.image, c.id, c.time, c.count, (c.count * (p.cost - p.cost*(p.discount/100))) AS all_cost FROM products p, cart c WHERE p.id = c.product_id*/
app.post('/productsToCart', async (req, res) => {
  const userid = req.body.userid;
  const productid = req.body.productid;
  const count = req.body.count;
  connection.query(`INSERT INTO \`cart\` (\`id\`, \`user_id\`, \`product_id\`, \`count\`, \`time\`) VALUES (NULL, '${userid}', '${productid}', '${count}', CURRENT_DATE());`);
});

app.post('/productsToBuy', async (req, res) => {
  const user = req.body.user;

  connection.query(`DELETE FROM \`cart\` WHERE user_id = '${user}';`);
});

app.post('/removeOffer', async (req, res) => {
  const id = req.body.id;

  connection.query(`DELETE FROM \`cart\` WHERE id = '${id}';`);
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

app.post('/userUpdateInfo', async (req, res) => {
  const id = req.body.id;
  const password = req.body.password;
  const email = req.body.email;
  const name = req.body.name;
  const sourname = req.body.sourname;
  const address = req.body.address;
  const phone = req.body.phone;

  /*UPDATE goods SET title = "утюг", price = 300 WHERE num = 2*/
  connection.query(`UPDATE \`users\` SET \`password\` = '${password}', \`email\` = '${email}', \`name\` = '${name}', \`sourname\` = '${sourname}', \`address\` = '${address}', \`phone\` = '${phone}' WHERE \`id\` = ${id}`);
});

//res.send(res.json(result));

app.listen(4000, () => {
  console.log('Server started.')
});