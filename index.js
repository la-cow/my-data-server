const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
// 增加對多種格式的支援
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 增加一個測試頁面，確保後端真的活著
app.get('/', (req, res) => {
    res.send('探測器後端運作中！');
});

app.post('/log', (req, res) => {
    console.log('--- [收到數據] ---');
    console.log('來自 IP:', req.headers['x-forwarded-for'] || req.socket.remoteAddress);
    console.log('設備內容:', JSON.stringify(req.body, null, 2));
    res.sendStatus(200);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is fully ready!');
});
