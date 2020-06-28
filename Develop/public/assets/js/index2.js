const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server on PORT ${PORT}`));