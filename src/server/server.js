import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();
app.use(cors({
  origin: (origin, callback) => {
    if (origin === 'http://localhost:8080') callback(null, true)
  }
}));

app.use(express.static(path.join('./', 'dist')));

app.get('/api', (req, res) => {
  res.send('call api');
})

app.get('*', function (req, res) {
  res.sendFile(path.join('./', 'dist', 'index.html'))
})

app.listen(3000, ()=> {
  console.log('server running');
})
