const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("School Api");
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})