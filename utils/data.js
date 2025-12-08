// utils/data.js
const { crawl } = require('../src/web');
const XosoResult = require('../models/XosoResult');

async function saveIfNew(data) {
    try {
        await XosoResult.deleteOne({ date: data.date });
        const newResult = new XosoResult(data);
        await newResult.save();
        console.log(`ĐÃ LƯU MỚI NGÀY ${data.date}`);
        return newResult.toObject();
    } catch (err) {
        console.error('Lỗi lưu:', err);
        return null;
    }
}

async function getLatestResult() {
    let result = await XosoResult.findOne().sort({ createdAt: -1 }).lean();

    if (!result) {
        console.log('DB rỗng → cào mới');
        const fresh = await crawl();
        if (fresh) {
            result = await saveIfNew(fresh);
        }
    }

    return result || null;
}

module.exports = { getLatestResult };