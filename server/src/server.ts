import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('test')

  response.json([
    'Diego Andrade',
    'José',
    'João'
  ])
});

app.listen(3333);
