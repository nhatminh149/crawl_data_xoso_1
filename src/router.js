// src/router.js
const express = require('express');
const router = express.Router();
const { getLatestResult } = require('../utils/data'); // đúng đường dẫn

router.get('/', async (req, res) => {
    const result = await getLatestResult();
    if (!result) {
        return res.send(
            '<h1 style="text-align:center;padding:100px">Đang cập nhật dữ liệu, vui lòng đợi 1 phút...</h1>',
        );
    }
    res.render('xoso', { title: 'XSMB Hôm Nay', result });
});

router.get('/partials/menu/thong-ke-tong-hop-xsmb', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/menu/thong-ke-tong-hop-xsmb', {
        title: 'Thống kê tổng hợp',
        result,
    });
});

router.get('/partials/menu/tklotogancv', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/menu/tklotogancv', { title: 'Lô gan cuối', result });
});

router.get('/partials/menu/tklotokep', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/menu/tklotokep', { title: 'Lô gan cuối', result });
});

router.get('/partials/menu/tklotogandau', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/menu/tklotogandau', { title: 'Lô gan đầu', result });
});

router.get('/partials/menu/tklotoganduoi', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/menu/tklotoganduoi', { title: 'Lô gan đuôi', result });
});

router.get('/partials/menu/tklotogan', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/menu/tklotogan', { title: 'Lô gan cực đại', result });
});

router.get('/partials/menu/tkgdb', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/menu/tkgdb', { title: 'Lô gan cực đại', result });
});

router.get('/partials/xscm/xsmb', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/xscm/xsmb', { title: 'Lô gan cực đại', result });
});

router.get('/partials/xscm/xsAnGiang', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/xscm/xsAnGiang', { title: 'Lô gan cực đại', result });
});

router.get('/partials/xscm/xsTayNinh', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/xscm/xsTayNinh', { title: 'Lô gan cực đại', result });
});

router.get('/partials/xscm/xsBinhThuan', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/xscm/xsBinhThuan', { title: 'Lô gan cực đại', result });
});

router.get('/partials/xscm/xsBinhDinh', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/xscm/xsBinhDinh', { title: 'Lô gan cực đại', result });
});

router.get('/partials/xscm/xsQuangNam', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/xscm/xsQuangNam', { title: 'Lô gan cực đại', result });
});

router.get('/partials/xscm/xsQuangTri', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/xscm/xsQuangTri', { title: 'Lô gan cực đại', result });
});

router.get('/partials/xscm/xsKhanhHoa', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/xscm/xsKhanhHoa', { title: 'Lô gan cực đại', result });
});

router.get('/partials/xscm/xsDaNang', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/xscm/xsDaNang', { title: 'Lô gan cực đại', result });
});

router.get('/partials/xscm/xsDongNai', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/xscm/xsDongNai', { title: 'Lô gan cực đại', result });
});

router.get('/partials/xscm/xsSocTrang', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/xscm/xsSocTrang', { title: 'Lô gan cực đại', result });
});

router.get('/partials/xscm/xsBenTre', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/xscm/xsBenTre', { title: 'Lô gan cực đại', result });
});

router.get('/partials/xscm/xsBinhDuong', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/xscm/xsBinhDuong', { title: 'Lô gan cực đại', result });
});

router.get('/partials/xscm/xsDakLak', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/xscm/xsDakLak', { title: 'Lô gan cực đại', result });
});

router.get('/partials/xscm/xsDacNong', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/xscm/xsDacNong', { title: 'Lô gan cực đại', result });
});

router.get('/partials/xscm/xsHue', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/xscm/xsHue', { title: 'Lô gan cực đại', result });
});

router.get('/partials/xscm/xsGiaLai', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/xscm/xsGiaLai', { title: 'Lô gan cực đại', result });
});

router.get('/partials/xscm/xsBacLieu', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/xscm/xsBacLieu', { title: 'Lô gan cực đại', result });
});

router.get('/partials/xscm/xsBinhPhuoc', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/xscm/xsBinhPhuoc', { title: 'Lô gan cực đại', result });
});

router.get('/partials/xscm/xsCanTho', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/xscm/xsCanTho', { title: 'Lô gan cực đại', result });
});

//
router.get('/partials/menu/tklxh', async (req, res) => {
    const result = await getLatestResult();
    const bosoArray = result?.boso_TKLXH ?? [];
    const phantramArray = result?.phantram_TKLXH ?? [];
    const luotArray = result?.luot_TKLXH ?? [];
    const maxPercentage = 7;
    const statisticsList = bosoArray.map((boso, index) => {
        const phantramRaw = phantramArray[index] ?? '0%';
        const phantram = parseFloat(String(phantramRaw).replace('%', '').trim()) || 0;
        const width =
            phantram > 0 ? Math.min((phantram / maxPercentage) * 100, 100).toFixed(2) + '%' : '0%';

        return {
            boso,
            phantram: phantramRaw,
            luot: luotArray[index] ?? '0 lượt',
            width,
        };
    });

    res.render('partials/menu/tklxh', {
        title: 'Thống kê Lô Xiên Hai',
        statisticsList,
        maxPercentage,
    });
});

///
router.get('/partials/menu/tktheothu', async (req, res) => {
    const result = await getLatestResult();
    const bosoArray = result?.boso_theoThu ?? [];
    const phantramArray = result?.phantram_theoThu ?? [];
    const luotArray = result?.luot_theoThu ?? [];
    const maxPercentage = 13;
    const statisticsList = bosoArray.map((boso, index) => {
        const phantramRaw = phantramArray[index] ?? '0%';
        const phantram = parseFloat(String(phantramRaw).replace('%', '').trim()) || 0;
        const width =
            phantram > 0 ? Math.min((phantram / maxPercentage) * 100, 100).toFixed(2) + '%' : '0%';

        return {
            boso,
            phantram: phantramRaw,
            luot: luotArray[index] ?? '0 lượt',
            width,
        };
    });

    res.render('partials/menu/tktheothu', {
        title: 'Thống kê Lô Xiên Hai',
        statisticsList,
        maxPercentage,
    });
});

router.get('/partials/menu/tkkcb', async (req, res) => {
    const r = await getLatestResult();
    const max = 100;

    const list = (r?.boso_TKKCB ?? []).map((boso, i) => {
        const slxh = parseFloat(String(r?.slxh_TKKCB?.[i] ?? 0).replace('%', '')) || 0;
        const rate = slxh > 0 ? (slxh / max) * 100 : 0;
        return {
            boso,
            slxh: r?.slxh_TKKCB?.[i] ?? 0,
            currentRate: rate.toFixed(2) + '%',
            width: Math.min(rate, 100).toFixed(2) + '%',
        };
    });

    res.render('partials/menu/tkkcb', {
        title: 'Thống kê Kết Cặp Bộ',
        statisticsList: list,
        maxPeriods: max,
    });
});

router.get('/partials/menu/kdencc', async (req, res) => {
    const result = await getLatestResult();
    const bosoArray = result?.boso_TKkdencc ?? [];
    const phantramArray = result?.phantram_TKkdencc ?? [];
    const luotArray = result?.luot_TKkdencc ?? [];
    const maxPercentage = 1.73;
    const statisticsList = bosoArray.map((boso, index) => {
        const phantramRaw = phantramArray[index] ?? '0%';
        const phantram = parseFloat(String(phantramRaw).replace('%', '').trim()) || 0;
        const width =
            phantram > 0 ? Math.min((phantram / maxPercentage) * 100, 100).toFixed(2) + '%' : '0%';

        return {
            boso,
            phantram: phantramRaw,
            luot: luotArray[index] ?? '0 lượt',
            width,
        };
    });

    res.render('partials/menu/kdencc', {
        title: 'Thống kê Lô Xiên Hai',
        statisticsList,
        maxPercentage,
    });
});

router.get('/partials/menu/tkkbosung', async (req, res) => {
    const result = await getLatestResult();
    const rawData = result?.combo_TKKBS ?? [];
    function parseKBSData(dataArray) {
        if (!Array.isArray(dataArray) || dataArray.length < 2) {
            return [];
        }
        const tableData = dataArray.slice(1);
        const parsedData = tableData
            .map((line) => {
                const parts = line.split('\t').map((item) => item.trim());
                if (parts.length < 5) {
                    return null;
                }
                const [kyQuay, lon, be, chan, le] = parts;
                const lonNum = parseInt(lon);
                const beNum = parseInt(be);
                const chanNum = parseInt(chan);
                const leNum = parseInt(le);
                const isColored = (num) => !isNaN(num) && num > 10;
                return {
                    kyQuay: kyQuay,
                    lon: { value: lon, isColored: isColored(lonNum) },
                    be: { value: be, isColored: isColored(beNum) },
                    chan: { value: chan, isColored: isColored(chanNum) },
                    le: { value: le, isColored: isColored(leNum) },
                };
            })
            .filter((item) => item !== null);

        return parsedData;
    }
    const tableRows = parseKBSData(rawData);
    res.render('partials/menu/tkkbosung', {
        title: 'Thống kê Lớn/Bé/Chẵn/Lẻ',
        tableRows: tableRows,
    });
});

router.get('/partials/menu_dientoan/xsdientoan123', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/menu_dientoan/xsdientoan123', {
        title: 'Thống kê tổng hợp',
        result,
    });
});

router.get('/partials/menu_dientoan/xsdientoan636', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/menu_dientoan/xsdientoan636', {
        title: 'Thống kê tổng hợp',
        result,
    });
});

router.get('/partials/menu_dientoan/thantai4', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/menu_dientoan/thantai4', {
        title: 'Thống kê tổng hợp',
        result,
    });
});

router.get('/partials/menu_dientoan/keno', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/menu_dientoan/keno', {
        title: 'Thống kê tổng hợp',
        result,
    });
});

router.get('/partials/menu_dientoan/max3d', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/menu_dientoan/max3d', {
        title: 'Thống kê tổng hợp',
        result,
    });
});

router.get('/partials/menu_dientoan/max3dpro', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/menu_dientoan/max3dpro', {
        title: 'Thống kê tổng hợp',
        result,
    });
});

router.get('/partials/menu_dientoan/mega', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/menu_dientoan/mega', {
        title: 'Thống kê tổng hợp',
        result,
    });
});

router.get('/partials/menu_dientoan/power', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/menu_dientoan/power', {
        title: 'Thống kê tổng hợp',
        result,
    });
});

router.get('/partials/menu/tklxh1', async (req, res) => {
    const result = await getLatestResult();
    res.render('partials/menu/tklxh1', { title: 'Lô gan cực đại', result });
});
module.exports = router;
