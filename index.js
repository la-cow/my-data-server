const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/log', (req, res) => {
    console.log('--- 抓到目標數據 ---');
    console.log(JSON.stringify(req.body, null, 2));
    res.sendStatus(200);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
});
