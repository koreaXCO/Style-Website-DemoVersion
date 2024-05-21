const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0410',
  database: 'sample_db'
});

// 데이터베이스 연결
connection.connect(err => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});

// 텍스트 데이터 가져오기 API
app.get('/get-text/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT text_column FROM texts WHERE id = ?', [id], (error, results) => {
    if (error) {
      res.status(500).send('Error executing query: ' + error.stack);
      return;
    }
    if (results.length > 0) {
      res.json({ text: results[0].text_column });
    } else {
      res.status(404).send('Text not found');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});