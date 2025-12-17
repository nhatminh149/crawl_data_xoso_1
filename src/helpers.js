const Handlebars = require('handlebars');

Handlebars.registerHelper('get', function (array, index) {
    return array[index];
});

// bảng lô gan
Handlebars.registerHelper(
    'lotoGanBlock',
    function (startNum, dataStartIndex, options) {
        const result = options.data.root.result || this.result || {};
        const loto = result.loto || [];

        let html = '';

        html +=
            '<tr class="bg-gradient-to-r from-indigo-50 to-blue-50 border-b-2 border-indigo-300">';
        html +=
            '<td class="text-center bg-[#E8E8E8] sticky left-0 z-10 shadow-lg" style="color:#AA0000">Loto</td>';
        for (let i = 0; i < 20; i++) {
            const num = String(startNum + i).padStart(2, '0');
            html += `<td class=" text-center bg-[#E8E8E8]" style="color:#AA0000">${num}</td>`;
        }
        html += '</tr>';

        html += '<tr class="bg-white">';
        html +=
            '<td class="h-3xl text-center bg-white sticky left-0 z-10 ">Ngày</td>';
        for (let i = 0; i < 20; i++) {
            const value = loto[dataStartIndex + i] || 0;
            let cellClass = ' text-center text-lg ';

            if (value >= 35) cellClass += 'text-black';
            else if (value >= 30) cellClass += 'text-black';
            else if (value >= 25) cellClass += 'text-black';
            else if (value >= 20) cellClass += 'text-black';
            else if (value >= 15) cellClass += 'text-black';
            else if (value >= 10) cellClass += 'text-black';
            else cellClass += 'text-black';

            html += `<td class="${cellClass}">${value === 0 ? '-' : value}</td>`;
        }
        html += '</tr>';

        return new Handlebars.SafeString(html);
    },
);

// bảng lô gan
Handlebars.registerHelper(
    'lotodau',
    function (startNum, dataStartIndex, options) {
        const result = options.data.root.result || this.result || {};
        const tklogandauso = result.tklogandauso || [];
        let html = '';
        for (let i = 0; i <= 10; i++) {
            const value = tklogandauso[dataStartIndex + i] || 0;
            let cellClass = 'text-center';

            if (value >= 35) cellClass += 'text-back text-center';
            else if (value >= 30) cellClass += 'text-back text-center';
            else if (value >= 25) cellClass += 'text-back text-center';
            else if (value >= 20) cellClass += 'text-back text-center';
            else if (value >= 15) cellClass += 'text-black text-center';
            else if (value >= 10) cellClass += 'text-black text-center';
            else cellClass += 'text-black text-center';

            html += `<td class="${cellClass}">${value === 0 ? '-' : value}</td>`;
        }
        html += '</tr>';

        return new Handlebars.SafeString(html);
    },
);

// bảng lô gan
Handlebars.registerHelper(
    'lotoduoi',
    function (startNum, dataStartIndex, options) {
        const result = options.data.root.result || this.result || {};
        const tkloganduoiso = result.tkloganduoiso || [];
        let html = '';
        for (let i = 0; i <= 10; i++) {
            const value = tkloganduoiso[dataStartIndex + i] || 0;
            let cellClass = ' text-center';

            if (value >= 35) cellClass += 'text-back text-center';
            else if (value >= 30) cellClass += 'text-back text-center';
            else if (value >= 25) cellClass += 'text-back text-center';
            else if (value >= 20) cellClass += 'text-back text-center';
            else if (value >= 15) cellClass += 'text-black text-center';
            else if (value >= 10) cellClass += 'text-black text-center';
            else cellClass += 'text-black text-center';

            html += `<td class="${cellClass}">${value === 0 ? '-' : value}</td>`;
        }
        html += '</tr>';

        return new Handlebars.SafeString(html);
    },
);

// bảng tkgdb
Handlebars.registerHelper(
    'tkgdb',
    function (startNum, dataStartIndex, options) {
        const result = options.data.root.result || this.result || {};
        const TKGDBTH = result.TKGDBTH || [];
        let html = '';
        for (let i = 0; i < 7; i++) {
            const value = TKGDBTH[dataStartIndex + i] || 0;
            let cellClass = 'text-center';

            if (value >= 35) cellClass += 'text-back text-center';
            else if (value >= 30) cellClass += 'text-back text-center';
            else if (value >= 25) cellClass += 'text-back text-center';
            else if (value >= 20) cellClass += 'text-back text-center';
            else if (value >= 15) cellClass += 'text-black text-center';
            else if (value >= 10) cellClass += 'text-black text-center';
            else cellClass += 'text-black text-center';

            html += `<td class="${cellClass}">${value === 0 ? '-' : value}</td>`;
        }
        html += '</tr>';

        return new Handlebars.SafeString(html);
    },
);

const rawData = [
    'Kỳ quay\tLớn\tBé\tChẵn\tLẻ',
    '#262581\t9\t11\t11\t9',
    '#262580\t6\t14\t10\t10',
    '#262539\t11\t9\t10\t10',
];

function parseKBSData(dataArray) {
    if (!dataArray || dataArray.length < 2) return [];
    const tableData = dataArray.slice(1);
    const parsedData = tableData.map((line) => {
        const [kyQuay, lon, be, chan, le] = line
            .split('\t')
            .map((item) => item.trim());
        const styleCell = (value) => {
            const num = parseInt(value);
            const isColored = num > 10;
            return {
                value: value,
                isColored: isColored,
            };
        };
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
        };
    });
    return parsedData;
}

const tableRows = parseKBSData(rawData);

//

Handlebars.registerHelper('giai', function (indexTinh, giai, indexSo) {
    if (!this.result || !Array.isArray(this.result.tenTinhMTMN)) {
        return '';
    }

    const tenTinh = this.result.tenTinhMTMN[indexTinh] || '';
    const map = {
        'Tiền Giang': 'TG',
        'Kiên Giang': 'KG',
        'Đà Lạt': 'DL',
        'An Giang': 'AG',
        'Bình Thuận': 'BTH',
        'Vĩnh Long': 'VL',
        'TP HCM': 'HCM',
        'Hồ Chí Minh': 'HCM',
        TPHCM: 'HCM',
        'Đồng Tháp': 'DT',
        'Cà Mau': 'CM',
        'Bình Dương': 'BD',
        'Trà Vinh': 'TV',
        'Đồng Nai': 'DN',
        'Cần Thơ': 'CT',
        'Sóc Trăng': 'ST',
        'Bến Tre': 'BTR',
        'Vũng Tàu': 'VT',
        'Bạc Liêu': 'BL',
    };

    const prefix = map[tenTinh];
    if (!prefix) {
        return '';
    }

    let fieldName;
    if (giai === 'DB') {
        fieldName = 'GDB' + prefix;
    } else {
        fieldName = 'G' + giai + prefix;
    }
    const value = this.result[fieldName];
    if (typeof indexSo === 'number' && Array.isArray(value)) {
        return value[indexSo] || '';
    }

    return value || '';
});

Handlebars.registerHelper('lotoDau', function (indexTinh, dau, options) {
    const root = options.data.root;
    const result = root.result;
    if (!result) return '';
    if (!Array.isArray(result.tenTinhMTMN)) return '';

    const tenTinh = result.tenTinhMTMN[indexTinh];
    if (tenTinh === undefined) return '';

    const map = {
        'Tiền Giang': 'TG',
        'Kiên Giang': 'KG',
        'Đà Lạt': 'DL',
        'An Giang': 'AG',
        'Bình Thuận': 'BTH',
        'Vĩnh Long': 'VL',
        'TP HCM': 'HCM',
        'Hồ Chí Minh': 'HCM',
        TPHCM: 'HCM',
        'Đồng Tháp': 'DT',
        'Cà Mau': 'CM',
        'Bình Dương': 'BD',
        'Trà Vinh': 'TV',
        'Đồng Nai': 'DN',
        'Cần Thơ': 'CT',
        'Sóc Trăng': 'ST',
        'Bến Tre': 'BTR',
        'Vũng Tàu': 'VT',
        'Bạc Liêu': 'BL',
    };

    const prefix = map[tenTinh];
    if (!prefix) return '';

    const fieldName = 'LT' + dau + prefix;
    return result[fieldName] || '';
});
Handlebars.registerHelper('array', function (...args) {
    args.pop();
    return args;
});
Handlebars.registerHelper('gt', function (a, b) {
    return a > b;
});

Handlebars.registerHelper('eq', function (a, b) {
    return a === b;
});

Handlebars.registerHelper('giaiMT', function (indexTinh, giaiMT, indexSo) {
    if (!this.result || !Array.isArray(this.result.tenTinhMTMN)) {
        return 'ko';
    }

    const tenTinh = this.result.tenTinhMTMN[indexTinh] || '';
    const map = {
        'Khánh Hòa': 'KH',
        'Kon Tum': 'KT',
        Huế: 'TTH',
        'Phú Yên': 'PY',
        'Đắk Lắk': 'DLK',
        'Quảng Nam': 'QNA',
    };

    const prefix = map[tenTinh];
    if (!prefix) {
        return '';
    }

    let fieldName;
    if (giaiMT === 'DB') {
        fieldName = 'GDB' + prefix;
    } else {
        fieldName = 'G' + giaiMT + prefix;
    }
    const value = this.result[fieldName];
    if (typeof indexSo === 'number' && Array.isArray(value)) {
        return value[indexSo] || '';
    }

    return value || '';
});

Handlebars.registerHelper('lotoDauMT', function (indexTinh, dau, options) {
    const root = options.data.root;
    const result = root.result;
    if (!result) return '';
    if (!Array.isArray(result.tenTinhMTMN)) return '';

    const tenTinh = result.tenTinhMTMN[indexTinh];
    if (tenTinh === undefined) return '';

    const map = {
        'Khánh Hòa': 'KH',
        'Kon Tum': 'KT',
        Huế: 'TTH',
        'Phú Yên': 'PY',
        'Đắk Lắk': 'DLK',
        'Quảng Nam': 'QNA',
    };

    const prefix = map[tenTinh];
    if (!prefix) return '';

    const fieldName = 'LT' + dau + prefix;
    return result[fieldName] || '';
});

Handlebars.registerHelper('slice', function (str, start, end) {
    if (!str) return '';
    return str.slice(start, end);
});

Handlebars.registerHelper('split2', function (str) {
    if (!str) return [];
    return str.match(/.{2}/g);
});

Handlebars.registerHelper('powerLoop', function (options) {
    let html = '';
    const globalContext = this;

    for (let i = 1; i <= 12; i++) {
        const iterationData = Object.assign({}, globalContext, {
            i: i,
            paraIndex: i,
            ballIndex: i,
            specialIndex: i,
            textRightStart: 10 + (i - 1) * 10,
        });

        html += options.fn(iterationData);
    }
    return html;
});

Handlebars.registerHelper('max3dLoop', function (options) {
    let html = '';
    const context = this;
    for (let i = 0; i <= 13; i++) {
        const data = Object.assign({}, context, {
            titleIndex: i,
            linkIndex: i,
            g1Start: i * 2,
            g2Start: i * 12,
            g3Start: i * 6,
        });

        html += options.fn(data);
    }
    return html;
});

Handlebars.registerHelper('thantai4Loop', function (options) {
    let html = '';
    const context = this;
    for (let i = 0; i <= 13; i++) {
        const data = Object.assign({}, context, {
            dayIndex: i,
            numberIndex: i,
        });

        html += options.fn(data);
    }
    return html;
});

Handlebars.registerHelper('max3dLoop_pro', function (options) {
    let html = '';
    const context = this;
    for (let i = 0; i <= 9; i++) {
        const data = Object.assign({}, context, {
            titleIndex: i,
            linkIndex: i,
            g1Start: i * 2,
            g2Start: i * 12,
            g3Start: i * 6,
        });

        html += options.fn(data);
    }
    return html;
});

Handlebars.registerHelper('add', function (a, b) {
    return parseInt(a) + parseInt(b);
});

Handlebars.registerHelper('dt123Loop', function (options) {
    let html = '';
    const context = this;
    for (let i = 0; i <= 13; i++) {
        const data = Object.assign({}, context, {
            titleIndex: i,
            ballIndex: i,
        });

        html += options.fn(data);
    }
    return html;
});

Handlebars.registerHelper('dt636Loop', function (options) {
    let html = '';
    const context = this;
    for (let i = 0; i <= 13; i++) {
        const data = Object.assign({}, context, {
            titleIndex: i,
            ballIndex: i,
        });

        html += options.fn(data);
    }
    return html;
});
