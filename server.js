const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/apply', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'apply.html'));
});

app.listen(PORT, () => {
  console.log(`PM Circle: Live Reps running on port ${PORT}`);
});
