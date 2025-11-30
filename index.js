const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const { connect } = require('./db/connect');
const { crawl } = require('./src/web');
const XosoResult = require('./models/XosoResult');
const handlebars = require('handlebars');


handlebars.registerHelper('get', function(array, index) {
    return array[index];

});

const app = express();
const PORT = 3000;

app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: {
            formatDate: (dateStr) => dateStr || 'Chưa có',
            joinArray: (arr) => (Array.isArray(arr) ? arr.join(' - ') : arr),
        },
    }),
);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, 'public')));

async function saveIfNew(data) {
    try {
        await XosoResult.deleteOne({ date: data.date });
        console.log(`Đã xóa dữ liệu cũ ngày ${data.date}`);

        const newResult = new XosoResult(data);
        await newResult.save();

        console.log(
            `ĐÃ ÉP CẬP NHẬT THÀNH CÔNG NGÀY ${data.date} `,
        );
        return newResult.toObject(); 
    } catch (err) {
        console.error('Lỗi ép cập nhật:', err.message);
        return null; 
    }
}

async function getLatestResult() {
    let result = await XosoResult.findOne().sort({ createdAt: -1 }).lean(); // Lấy dữ liệu mới nhất từ DB

    if (!result) {
        console.log('Chưa có dữ liệu trong DB → cào mới...');
        const fresh = await crawl(); // Cào dữ liệu mới
        result = await saveIfNew(fresh); // Lưu và lấy object

        if (result && result._id) {
            return result; 
        } else {
            return null; // Không cào được
        }
    }
    return result;
}

app.get('/partials/thong-ke-tong-hop-xsmb', async (req, res) => {
    // Nếu URL gốc có chứa /partials/partials → redirect về đúng đường
    if (req.originalUrl.includes('/partials/partials/')) {
        return res.redirect('/partials/thong-ke-tong-hop-xsmb');
    }

    const result = await getLatestResult(); // Gọi hàm đã định nghĩa
    
    res.render('partials/thong-ke-tong-hop-xsmb', {
        title: 'Thống Kê Tổng Hợp XSMB',
        result,
    });
});

app.get('/partials/tklotogan', async (req, res) => {
    if (req.originalUrl.includes('/partials/partials/')) {
        return res.redirect('/partials/tklotogan');
    }
    
    const result = await getLatestResult(); 
    
    res.render('partials/tklotogan', {
        title: 'Thống Kê Tổng Hợp XSMB',
        result,
    });
});

app.get('/', async (req, res) => {
    try {
        const result = await getLatestResult(); 

        if (!result) {
            return res.send(
                '<h1>Đang cập nhật kết quả xổ số... Vui lòng đợi 1-2 phút rồi tải lại trang nhé!</h1>',
            );
        }

        console.log('=== KIỂM TRA DỮ LIỆU TRONG DB ===');
        const count = await XosoResult.countDocuments();
        console.log('Tổng số bản ghi trong DB:', count);

        if (count === 0) {
            console.log('KHÔNG CÓ DỮ LIỆU TRONG DB → SẼ CÀO MỚI');
        } else {
            const all = await XosoResult.find().sort({ createdAt: -1 });
            console.log('Dữ liệu mới nhất:', {
                date: all[0].date,
                GDB: all[0].GDB,
                G1: all[0].G1,
            });
        }

        res.render('xoso', {
            title: 'Kết Quả Xổ Số Miền Bắc Hôm Nay',
            result,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Lỗi server');
    }
});

async function start() {
    await connect();

    try {
        const data = await crawl();
        await saveIfNew(data);
    } catch (err) {
        console.log('Cào lần đầu thất bại, sẽ thử lại khi truy cập trang');
    }

    app.listen(PORT, () => {
        console.log(`Server chạy tại http://localhost:${PORT}`);
    });
}


start();