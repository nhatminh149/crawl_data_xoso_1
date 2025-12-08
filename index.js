require('./src/helpers');                     
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const { connect } = require('./db/connect');
const router = require('./src/router');

const app = express();
const PORT = 3000;

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.use('/', router);

(async () => {
    try {
        await connect();
        console.log('MongoDB kết nối thành công');
        try {
            const { crawl } = require('./src/web');
            const XosoResult = require('./models/XosoResult');
            const data = await crawl();
            if (data?.date) {
                await XosoResult.deleteOne({ date: data.date });
                await new XosoResult(data).save();
                console.log(`Đã cập nhật dữ liệu ngày ${data.date}`);
            }
        } catch (e) {
            console.log('Cào lần đầu thất bại → sẽ cào khi có người truy cập');
        }

        app.listen(PORT, () => {
            console.log(`Server đang chạy tại http://localhost:${PORT}`);
        });

    } catch (err) {
        console.error('Lỗi khởi động server:', err);
        process.exit(1);
    }
})();