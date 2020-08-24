const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

connection.connect();

app.get('/api/customers', (req, res) => {
    connection.query(
        "SELECT * FROM CUSTOMER",
        (err, rows, fields) => {
            res.send(rows);
        }
    );
} );

/* app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '이예송',
            'birthday': '1973',
            'gender': '남자',
            'job': '직장인'
          },
          {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '이지백',
            'birthday': '1973',
            'gender': '남자',
            'job': '디자이너'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '이대율',
            'birthday': '1973',
            'gender': '남자',
            'job': '개발자'
          }
    ]);
}); */

/* app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express!'});
});  */

app.listen(port, () => console.log(`Listening on port ${port}`));

