const helpers = require('./src/helpers');
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const { connect } = require('./db/connect');
const router = require('./src/router');
const cron = require('node-cron');

const app = express();
const PORT = 3000;

app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers,
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use('/', router);

async function updateKetQua() {
    try {
        const { crawl } = require('./src/web');
        const XosoResult = require('./models/XosoResult');

        const data = await crawl();
        if (data && data.date) {
            await XosoResult.deleteOne({ date: data.date });
            await new XosoResult(data).save();
            console.log(
                `Cập nhật thành công: ${data.date} - ${new Date().toLocaleString()}`,
            );
        } else {
            console.log('Chưa có kết quả mới hoặc crawl thất bại');
        }
    } catch (err) {
        console.log('Lỗi khi crawl:', err.message);
    }
}

(async () => {
    try {
        await connect();
        console.log('MongoDB kết nối thành công');
        await updateKetQua();
        cron.schedule('*/5 * * * *', () => {
            console.log('Bắt đầu crawl định kỳ 5 phút...');
            updateKetQua();
        });

        app.listen(PORT, () => {
            console.log(`Server chạy tại http://localhost:${PORT}`);
            console.log('Truy cập ngay để xem kết quả mới nhất!');
        });
    } catch (err) {
        console.error('Lỗi khởi động server:', err);
        process.exit(1);
    }
})();
