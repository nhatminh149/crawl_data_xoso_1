// src/router.js
const express = require('express');
const router = express.Router();
const { getLatestResult } = require('../utils/data'); // đúng đường dẫn

router.get('/', async (req, res) => {
    const result = await getLatestResult();
    if (!result) {
        return res.send('<h1 style="text-align:center;padding:100px">Đang cập nhật dữ liệu, vui lòng đợi 1 phút...</h1>');
    }
    res.render('xoso', { title: 'XSMB Hôm Nay', result });
});

router.get('/partials/thong-ke-tong-hop-xsmb', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/thong-ke-tong-hop-xsmb', { title: 'Thống kê tổng hợp', result });
});

router.get('/partials/tklotogancv', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/tklotogancv', { title: 'Lô gan cuối', result });
});

router.get('/partials/tklotogandau', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/tklotogandau', { title: 'Lô gan đầu', result });
});

router.get('/partials/tklotogan', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/tklotogan', { title: 'Lô gan cực đại', result });
});

module.exports = router;