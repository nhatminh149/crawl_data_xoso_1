const Handlebars = require('handlebars');

Handlebars.registerHelper('get', function (array, index) {
    return array[index];
});

// bảng lô gan 
Handlebars.registerHelper('lotoGanBlock', function(startNum, dataStartIndex, options) {
    const result = options.data.root.result || this.result || {};
    const loto = result.loto || [];

    let html = '';

    html += '<tr class="bg-gradient-to-r from-indigo-50 to-blue-50 border-b-2 border-indigo-300">';
    html += '<td class="text-center bg-[#E8E8E8] sticky left-0 z-10 shadow-lg" style="color:#AA0000">Loto</td>';
    for (let i = 0; i < 20; i++) {
        const num = String(startNum + i).padStart(2, '0');
        html += `<td class=" text-center bg-[#E8E8E8]" style="color:#AA0000">${num}</td>`;
    }
    html += '</tr>';

    html += '<tr class="bg-white">';
    html += '<td class="h-3xl text-center bg-white sticky left-0 z-10 ">Ngày</td>';
    for (let i = 0; i < 20; i++) {
        const value = loto[dataStartIndex + i] || 0;
        let cellClass = ' text-center text-lg ';
        
        if (value >= 35)      cellClass += 'text-black';
        else if (value >= 30) cellClass += 'text-black';
        else if (value >= 25) cellClass += 'text-black';
        else if (value >= 20) cellClass += 'text-black';
        else if (value >= 15) cellClass += 'text-black';
        else if (value >= 10) cellClass += 'text-black';
        else                  cellClass += 'text-black';

        html += `<td class="${cellClass}">${value === 0 ? '-' : value}</td>`;
    }
    html += '</tr>';

    return new Handlebars.SafeString(html);
});


// bảng lô gan 
Handlebars.registerHelper('lotodau', function(startNum, dataStartIndex, options) {
    const result = options.data.root.result || this.result || {};
    const tklogandauso = result.tklogandauso || [];
    let html = '';
    for (let i = 0; i <= 10; i++) {
        const value = tklogandauso[dataStartIndex + i] || 0;
        let cellClass = ' text-center';
        
        if (value >= 35)      cellClass += 'text-back text-center';
        else if (value >= 30) cellClass += 'text-back text-center';
        else if (value >= 25) cellClass += 'text-back text-center';
        else if (value >= 20) cellClass += 'text-back text-center';
        else if (value >= 15) cellClass += 'text-black text-center';
        else if (value >= 10) cellClass += 'text-black text-center';
        else                  cellClass += 'text-black text-center';

        html += `<td class="${cellClass}">${value === 0 ? '-' : value}</td>`;
    }
    html += '</tr>';

    return new Handlebars.SafeString(html);
});

// bảng lô gan 
Handlebars.registerHelper('lotoduoi', function(startNum, dataStartIndex, options) {
    const result = options.data.root.result || this.result || {};
    const tkloganduoiso = result.tkloganduoiso || [];
    let html = '';
    for (let i = 0; i <= 10; i++) {
        const value = tkloganduoiso[dataStartIndex + i] || 0;
        let cellClass = ' text-center';
        
        if (value >= 35)      cellClass += 'text-back text-center';
        else if (value >= 30) cellClass += 'text-back text-center';
        else if (value >= 25) cellClass += 'text-back text-center';
        else if (value >= 20) cellClass += 'text-back text-center';
        else if (value >= 15) cellClass += 'text-black text-center';
        else if (value >= 10) cellClass += 'text-black text-center';
        else                  cellClass += 'text-black text-center';

        html += `<td class="${cellClass}">${value === 0 ? '-' : value}</td>`;
    }
    html += '</tr>';

    return new Handlebars.SafeString(html);
});

// bảng tkgdb
Handlebars.registerHelper('tkgdb', function(startNum, dataStartIndex, options) {
    const result = options.data.root.result || this.result || {};
    const TKGDBTH = result.TKGDBTH || [];
    let html = '';
    for (let i = 0; i < 7 ; i++) {
        const value = TKGDBTH[dataStartIndex + i] || 0;
        let cellClass = 'text-center';
        
        if (value >= 35)      cellClass += 'text-back text-center';
        else if (value >= 30) cellClass += 'text-back text-center';
        else if (value >= 25) cellClass += 'text-back text-center';
        else if (value >= 20) cellClass += 'text-back text-center';
        else if (value >= 15) cellClass += 'text-black text-center';
        else if (value >= 10) cellClass += 'text-black text-center';
        else                  cellClass += 'text-black text-center';

        html += `<td class="${cellClass}">${value === 0 ? '-' : value}</td>`;
    }
    html += '</tr>';

    return new Handlebars.SafeString(html);
});

// Ví dụ: Logic này nên nằm trong route handler của bạn (ví dụ: router.get('/partials/tkkbs', ...))

const rawData = [
    "Kỳ quay\tLớn\tBé\tChẵn\tLẻ",
    "#262581\t9\t11\t11\t9",
    "#262580\t6\t14\t10\t10",
    // ... thêm các dòng dữ liệu khác ...
    "#262539\t11\t9\t10\t10"
];

// Hàm để phân tích dữ liệu và tô màu
function parseKBSData(dataArray) {
    if (!dataArray || dataArray.length < 2) return [];

    // Bỏ dòng tiêu đề đầu tiên
    const tableData = dataArray.slice(1);
    const parsedData = tableData.map(line => {
        // Tách chuỗi bằng ký tự tab (\t)
        const [kyQuay, lon, be, chan, le] = line.split('\t').map(item => item.trim());

        // Định nghĩa logic tô màu (Dựa trên hình ảnh: số lớn hơn được tô màu)
        // Trong trường hợp này, tô màu cho giá trị lớn hơn 10 (hoặc nếu là số lớn hơn)
        
        // Logic tô màu đơn giản (ví dụ: tô đỏ nếu > 10)
        const styleCell = (value) => {
             const num = parseInt(value);
             // Logic: Tô đỏ nếu số > 10
             const isColored = num > 10; 
             return {
                 value: value,
                 isColored: isColored // Boolean để template sử dụng
             };
        };

        // Logic tô màu cho Chẵn/Lẻ và Lớn/Bé (thường là tô màu cho số lớn hơn trong cặp)
        const lonNum = parseInt(lon);
        const beNum = parseInt(be);
        const chanNum = parseInt(chan);
        const leNum = parseInt(le);

        return {
            kyQuay: kyQuay,
            lon: { value: lon, isColored: lonNum > beNum && lonNum > 10 },
            be: { value: be, isColored: beNum > lonNum && beNum > 10 },
            chan: { value: chan, isColored: chanNum > leNum && chanNum > 10 },
            le: { value: le, isColored: leNum > chanNum && leNum > 10 },
            // Logic trong ảnh có vẻ tô màu khi số > 10 hoặc số lớn hơn trong cặp
            // Tôi giữ logic tô màu khi số > 10 cho đơn giản.
        };
    });
    return parsedData;
}

const tableRows = parseKBSData(rawData);

// Sau đó gọi res.render('partials/tkkbs', { tableRows });



