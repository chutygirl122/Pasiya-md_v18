```js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`🟢 PASIYA-MD Bot Backend Running!<br>Owner: require('./config').OWNER_NUMBER`);
);

app.get('/session', (req, res) => 
  res.send(`SESSION_ID:{require('./config').SESSION_ID}`);
});

app.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`);
});
```
