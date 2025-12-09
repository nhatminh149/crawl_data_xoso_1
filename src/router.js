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

router.get('/partials/tklotoganduoi', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/tklotoganduoi', { title: 'Lô gan đuôi', result });
});

router.get('/partials/tklotogan', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/tklotogan', { title: 'Lô gan cực đại', result });
});

router.get('/partials/tkgdb', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/tkgdb', { title: 'Lô gan cực đại', result });
});

router.get('/partials/xsmb', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/xsmb', { title: 'Lô gan cực đại', result });
});

//
router.get('/partials/tklxh', async (req, res) => {
    const result = await getLatestResult();
    const bosoArray = result?.boso_TKLXH ?? [];
    const phantramArray = result?.phantram_TKLXH ?? [];
    const luotArray = result?.luot_TKLXH ?? [];
    const maxPercentage = 7;
    const statisticsList = bosoArray.map((boso, index) => {
        const phantramRaw = phantramArray[index] ?? '0%';
        const phantram = parseFloat(String(phantramRaw).replace('%', '').trim()) || 0;
        const width = phantram > 0 
            ? Math.min((phantram / maxPercentage) * 100, 100).toFixed(2) + '%'
            : '0%';

        return {
            boso,
            phantram: phantramRaw,
            luot: luotArray[index] ?? '0 lượt',
            width
        };
    });

    res.render('partials/tklxh', {
        title: 'Thống kê Lô Xiên Hai',
        statisticsList,
        maxPercentage
    });
});
router.get('/partials/tkkcb', async (req, res) => {
    const r = await getLatestResult();
    const max = 100;

    const list = (r?.boso_TKKCB ?? []).map((boso, i) => {
        const slxh = parseFloat(String(r?.slxh_TKKCB?.[i] ?? 0).replace('%', '')) || 0;
        const rate = slxh > 0 ? (slxh / max) * 100 : 0;
        return {
            boso,
            slxh: r?.slxh_TKKCB?.[i] ?? 0,
            currentRate: rate.toFixed(2) + '%',
            width: Math.min(rate, 100).toFixed(2) + '%'
        };
    });

    res.render('partials/tkkcb', {
        title: 'Thống kê Kết Cặp Bộ',
        statisticsList: list,
        maxPeriods: max
    });
});

router.get('/partials/kdencc', async (req, res) => {
    const result = await getLatestResult();
    const bosoArray = result?.boso_TKkdencc ?? [];
    const phantramArray = result?.phantram_TKkdencc ?? [];
    const luotArray = result?.luot_TKkdencc ?? [];
    const maxPercentage = 1.73;
    const statisticsList = bosoArray.map((boso, index) => {
        const phantramRaw = phantramArray[index] ?? '0%';
        const phantram = parseFloat(String(phantramRaw).replace('%', '').trim()) || 0;
        const width = phantram > 0 
            ? Math.min((phantram / maxPercentage) * 100, 100).toFixed(2) + '%'
            : '0%';

        return {
            boso,
            phantram: phantramRaw,
            luot: luotArray[index] ?? '0 lượt',
            width
        };
    });

    res.render('partials/kdencc', {
        title: 'Thống kê Lô Xiên Hai',
        statisticsList,
        maxPercentage
    });
});
module.exports = router;