const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    // Asynchronous operation that might throw an error
    await someAsyncOperation();
    res.send('Hello World!');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  await new Promise(resolve => setTimeout(resolve, 1000));
  // Simulate a failure
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong');
  }
}